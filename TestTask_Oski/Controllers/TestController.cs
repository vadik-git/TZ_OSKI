using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestTask_Oski.Data;

namespace TestTask_Oski.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController: ControllerBase
    {
        private readonly ApplicationDbContext db;

        public TestController(ApplicationDbContext context)
        {
            db = context;
        }
        [HttpGet]
        [Route("/GetAllTests")]
        public IActionResult GetAllTests()
        {
            var result = db.Tests.ToList();
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("/GetAllQuestionForTestId")]
        public IActionResult GetAllQuestionForTestId(int testId)
        {
            var result = db.Questions.Where(i=>i.TestId == testId).ToList();
            return new JsonResult(result);
        }


    }
}
