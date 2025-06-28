using Task.Models;

namespace Tasks.Routes;

//Separando as rotas de tarefas em um arquivo separado para melhor organização e manutenção, respeitando o princípio de responsabilidade única (SRP) do SOLID.
public static class TasksRoute
{
    public static void TasksRoutes(WebApplication app)
    {
        app.MapGet("tasks", () => "testando retorno de task");
    }
}