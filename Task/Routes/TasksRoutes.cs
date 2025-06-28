using Task.Models;

namespace Tasks.Routes;

//Separando as rotas de tarefas em um arquivo separado para melhor organização e manutenção, respeitando o princípio de responsabilidade única (SRP) do SOLID.
public static class TasksRoute
{
    public static void TasksRoutes(WebApplication app)
    {
        app.MapGet("tasks", () => new TaskModel("Tarefa de Exemplo", "Descrição da tarefa", DateTime.Now.AddDays(7), Task.Models.TaskStatus.Pendente))
            .WithName("GetTasks")
            .WithTags("Tasks");
    }
}