namespace Task.Models;

//Estou criando um model para definir as propriedades do objeto que será trafegado entre a API e o Frontend.
public class TaskModel
{
    //Adiciono a propriedade Id do tipo Guid para identificar cada tarefa individualmente
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DeadLineDate { get; set; }
    public TaskStatus Status { get; set; }
}