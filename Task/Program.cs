var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Injetando o serviço de contexto para utilizar o Sqlite
builder.Services.AddScoped<Tasks.Data.TaskContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Estou utilizando o recurso minimal APIs do ASP.NET Core para eliminar a necessidade de criar um Controller

Tasks.Routes.TasksRoute.TasksRoutes(app);

app.Run();