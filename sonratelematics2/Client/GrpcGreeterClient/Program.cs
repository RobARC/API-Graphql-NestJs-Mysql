using System;
using System.Net.Http;
using System.Threading.Tasks;
using Grpc.Net.Client;

namespace GrpcGreeterClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            //The port number(5001) must match the port of the gRPC server.
            using var channel = GrpcChannel.ForAddress("http://localhost:5000");
            var client = new Greeter.GreeterClient(channel);
            var reply = await client.SayHelloAsync(
                              new HelloRequest { Name = "Roberth Rondon" });
            Console.WriteLine("Greeting: " + reply.Message);
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();

            // The port number(5001) must match the port of the gRPC server.
            using var channel2 = GrpcChannel.ForAddress("http://localhost:5000");
            var client1 = new ProcessService.ProcessServiceClient(channel2);
            var addProcessRequest = await client1.AddProcessAsync(
                              new AddProcessRequest { Title = "Cambio de bujías",
                                                      Description = "Quitar bujias usadas, poner nuevas bujias"});
            Console.WriteLine("Servicio: " + addProcessRequest.Title);
            Console.WriteLine("Descripción: " + addProcessRequest.Description);
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}