using Microsoft.EntityFrameworkCore.Migrations;

namespace TestTask_Oski.Migrations
{
    public partial class AddtblQuestionsandtblTests : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblTests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblTests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblQuestions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Answer_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Answer_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Answer_3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Correct_Answer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TestId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblQuestions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblQuestions_tblTests_TestId",
                        column: x => x.TestId,
                        principalTable: "tblTests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblQuestions_TestId",
                table: "tblQuestions",
                column: "TestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblQuestions");

            migrationBuilder.DropTable(
                name: "tblTests");
        }
    }
}
