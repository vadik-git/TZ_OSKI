using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;
using TestTask_Oski.Models;

namespace TestTask_Oski.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Question> Questions { get; set; }
        public DbSet<MyTest> Tests { get; set; }

        public DbSet<UserApp> Users { get; set; }
    }
}
