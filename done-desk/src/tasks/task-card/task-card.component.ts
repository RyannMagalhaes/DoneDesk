import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Calendar,
  Clock,
  MoreVertical,
  LucideAngularModule,
  Trash,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Task, mockTasks } from '../../models/task.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MoreVertical = MoreVertical;
  readonly Trash = Trash;

  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter();

  constructor(private taskService: TaskService) {}

  formatDate(date: Date | string): string {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Data inválida';
    }
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  isOverdue(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate < today;
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id as number).subscribe({
      next: () => {
        console.log('Tarefa excluída com sucesso');
        this.taskDeleted.emit();
      },
      error: (error) => {
        console.error('Erro ao excluir a tarefa:', error);
      },
    });
  }

  editTaskStatus(status: 'pendente' | 'em andamento' | 'concluída'): void {
    const updatedTask: Task = {
      ...this.task,
      status: status,
    };
    this.taskService.editTask(updatedTask).subscribe({
      next: (task) => {
        console.log('Tarefa atualizada com sucesso:', task);
        this.task = { ...this.task, status: status };
      },
      error: (error) => {
        console.error('Erro ao atualizar a tarefa:', error);
      },
    });
  };
}
