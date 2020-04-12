using System.Collections.Generic;

namespace API.Errors
{
    public class ApiValidationErrorResponsive : ApiResponse
    {
        public IEnumerable<string> Errors { get; set; }

        public ApiValidationErrorResponsive() : base(400)
        {
        }
    }
}
