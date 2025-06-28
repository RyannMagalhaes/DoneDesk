namespace Task.Models;

//Estou criando um model para definir as propriedades do objeto que será trafegado entre a API e o Frontend.
public class TaskModel
{
    public TaskModel(string title, string description, DateTime deadLineDate, TaskStatus status)
    {
        Id = Guid.NewGuid(); //Gero um novo Guid para cada tarefa
        Title = title;
        Description = description;
        DeadLineDate = deadLineDate;
        Status = status;
    }

    //Adiciono a propriedade Id do tipo Guid para identificar cada tarefa individualmente
    public Guid Id { get; init; }

    //Adiciono as demais propriedades da tarefa requisitadas na questão.
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DeadLineDate { get; set; }
    public TaskStatus Status { get; set; }
}