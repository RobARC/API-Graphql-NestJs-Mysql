using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;


namespace sonratelematics2
{
    public class VehicleService : ProcessService.ProcessServiceBase
    {
        private readonly ILogger<VehicleService> _logger;
        public VehicleService(ILogger<VehicleService> logger)
        {
            _logger = logger;
        }
        public override Task<VehicleProcess> AddProcess(AddProcessRequest request, ServerCallContext context)
        {
            return Task.FromResult(new VehicleProcess
            {
               
                Title = request.Title,
                Description = request.Description 

            });
        }
        public override Task<VehicleProcess> UpdateProcessStatus(UpdateProcessStatusRequest request, ServerCallContext context)
        {
            return Task.FromResult(new VehicleProcess
            {
               
                Status = request.Status 

            });
        }
        public override Task<ProcessUpdate> AddProcessUpdate(AddProcessUpdateRequest request, ServerCallContext context)
        {
            return Task.FromResult(new ProcessUpdate
            {
               
                Description = request.Description 

            });
        }
      
    }
}