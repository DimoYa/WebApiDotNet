using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyProduct.Web.Test
{
    public class CustomWebApplicationFactory<TProgram>
         : WebApplicationFactory<TProgram> where TProgram : class
    {
    }
}
