using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using TestTask_Oski.Data;
using TestTask_Oski.Models;

namespace TestTask_Oski.Services
{
    public static class SeederDB
    {
        public static void SeedData(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                if (!context.Users.Any())
                {
                    var user = new UserApp
                    {
                        Email = "tapok@gmail.com",
                        Name = "Іван Петрович Шмондер",
                        Password = "123456"
                    };
                    context.Users.Add(user);
                    context.SaveChanges();


                    var test = new MyTest
                    {

                        Title = "Sport Test",
                        Description = "The best Test"


                    };

                    var test1 = new MyTest
                    {
                        Title = "History Test",
                        Description = "The best Test"
                    };
                    context.Tests.Add(test);
                    context.Tests.Add(test1);

                    context.SaveChanges();

                    var question = new Question
                    {
                        Title = "The best Fotball Player ?",
                        Answer_1 = "Messi",
                        Answer_2 = "Mbappe",
                        Answer_3 = "Kaka",
                        Correct_Answer = "Messi",
                        TestId = 1
                    };

                    var question1 = new Question
                    {
                        Title = "The best Bascketbal Player",
                        Answer_1 = "Jordan",
                        Answer_2 = "Bryant",
                        Answer_3 = "Lebron",
                        Correct_Answer = "Jordan",
                        TestId = 1
                    };

                    var question2 = new Question
                    {
                        Title = "When Start 2 world War ?",
                        Answer_1 = "1900",
                        Answer_2 = "1987",
                        Answer_3 = "1939",
                        Correct_Answer = "1939",
                        TestId = 2
                    };

                    var question3 = new Question
                    {
                        Title = "When End 2 world War ?",
                        Answer_1 = "1945",
                        Answer_2 = "1987",
                        Answer_3 = "1939",
                        Correct_Answer = "1945",
                        TestId = 2
                    };

                    context.Questions.Add(question);
                    context.Questions.Add(question1);
                    context.Questions.Add(question2);
                    context.Questions.Add(question3);

                    context.SaveChanges();
                }




            }

                

            
        }
        
    }
}
