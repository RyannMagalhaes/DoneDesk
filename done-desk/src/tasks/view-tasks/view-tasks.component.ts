import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task, mockTasks } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [
    LucideAngularModule,
    TaskCardComponent,
    CommonModule,
    NewTaskModalComponent,
  ],
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css',
})
export class ViewTasksComponent implements OnInit{
  readonly Plus = Plus;
  tasks!: Task[];

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  abrirModal() {
    console.log('Abrindo modal de nova tarefa');
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      width: '400px'
    });
  }

  getTaskList(){
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        console.log('Tarefas carregadas:', tasks);
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Erro ao carregar tarefas:', error);
      }
    });
  }

  filterTaskByStatus(status: string) {
    this.taskService.getTaskByStatus(status).subscribe({
      next: (tasks) => {
        console.log(`Tarefas com status ${status} carregadas:`, tasks);
        this.tasks = tasks;
      },
      error: (error) => {
        console.error(`Erro ao carregar tarefas com status ${status}:`, error);
      }
    });
  }
}
