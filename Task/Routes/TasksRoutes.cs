using Task.Models;

namespace Tasks.Routes;

//Separando as rotas de tarefas em um arquivo separado para melhor organização e manutenção, respeitando o princípio de responsabilidade única (SRP) do SOLID.
public static class TasksRoute
{
    public static void TasksRoutes(WebApplication app)
    {
        //Endpoint que retorna as tarefas
        app.MapGet("tasks", (Tasks.Data.TaskContext context) =>
        {
            var tasks = context.Tasks.ToList();
            return Results.Ok(tasks);
        });

        //Endpoint que cria uma nova tarefa
        app.MapPost("tasks/new", (TaskModel task, Tasks.Data.TaskContext context) =>
        {
            //Adicionando a tarefa ao contexto do banco de dados
            context.Tasks.Add(task);
            //Salvando as alterações no banco de dados
            context.SaveChanges();
            return Results.Created($"/tasks/{task.Id}", task);
        });

        //Endpoint que edita uma tarefa existente
        app.MapPut("tasks/edit/{id:guid}", (Guid id, TaskModel updatedTask, Tasks.Data.TaskContext context) =>
        {
            //Buscando a tarefa pelo Id
            var task = context.Tasks.Find(id);
            if (task == null)
            {
                return Results.NotFound();
            }
            //Atualizando as propriedades da tarefa
            task.Status = updatedTask.Status;
            //Salvando as alterações no banco de dados
            context.SaveChanges();
            return Results.Ok(task);
        });

        //Endpoint que deleta uma tarefa existente
        app.MapDelete("tasks/delete/{id:guid}", (Guid id, Tasks.Data.TaskContext context) =>
        {
            //Buscando a tarefa pelo Id
            var task = context.Tasks.Find(id);
            if (task == null)
            {
                return Results.NotFound();
            }
            //Removendo a tarefa do contexto do banco de dados
            context.Tasks.Remove(task);
            //Salvando as alterações no banco de dados
            context.SaveChanges();
            return Results.NoContent();
        });
    }
}