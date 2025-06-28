namespace Tasks.Data;

public class TaskContext
{
    //Estou utilizando o recurso de injeção de dependência do ASP.NET Core para criar uma instância do contexto de banco de dados.
    public TaskContext()
    {
        //Inicializo o contexto com uma lista vazia de tarefas.
        Tasks = new List<Models.TaskModel>();
    }

    //Propriedade que armazena a lista de tarefas.
    public List<Models.TaskModel> Tasks { get; set; }
}