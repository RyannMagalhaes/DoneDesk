export interface Task {
  id?: number,
  title: string,
  description: string,
  status: 'pendente' | 'em andamento' | 'concluída',
  deadLineDate: Date;
}

export const mockTasks: Task[] = [
  {
    title: "Implementar sistema de login",
    description: "Desenvolver tela de login com autenticação JWT e validação de campos",
    status: "em andamento",
    deadLineDate: new Date("2025-07-15")
  },
  {
    title: "Revisar documentação do projeto",
    description: "Atualizar README.md e adicionar documentação da API",
    status: "pendente",
    deadLineDate: new Date("2025-07-10")
  },
  {
    title: "Configurar pipeline CI/CD",
    description: "Implementar deploy automático usando GitHub Actions",
    status: "concluída",
    deadLineDate: new Date("2025-06-25")
  }
];
