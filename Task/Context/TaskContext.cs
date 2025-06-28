using Microsoft.EntityFrameworkCore;
using Task.Models;

namespace Tasks.Data;

public class TaskContext : DbContext
{
    //Estou utilizando uma extensão do DbContext para criar uma instância do contexto de banco de dados.

    public DbSet<TaskModel> Tasks { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        //configurando para usar o banco de dados SQLite.
        optionsBuilder.UseSqlite("Data Source=tasks.sqlite");

    }
}