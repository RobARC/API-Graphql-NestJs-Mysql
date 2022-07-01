FROM mcr.microsoft.com/dotnet/sdk:5.0
WORKDIR /Server
COPY . .
RUN dotnet restore
RUN dotnet dev-certs https
#ENTRYPOINT ["dotnet", "run"]
#RUN dotnet run 
ARG BUILD_CONFIGURATION=Debug
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_USE_POLLING_FILE_WATCHER=true  
ENV ASPNETCORE_URLS=http://+:80 
ENV ASPNETCORE_URLS2=https://+:443 
EXPOSE 443
EXPOSE 80
ENTRYPOINT [ "dotnet", "run"]