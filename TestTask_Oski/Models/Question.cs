using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestTask_Oski.Models
{
    [Table("tblQuestions")]
    public class Question
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Answer_1 { get; set; }
        [Required]
        public string Answer_2 { get; set; }
        [Required]
        public string Answer_3 { get; set; }
        [Required]
        public string Correct_Answer { get; set; }
        [ForeignKey("Test")]
        public int TestId { get; set; }
        public MyTest Test { get; set; }

    }
}
