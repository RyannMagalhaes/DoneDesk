import { Task } from './../../models/task.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LucideAngularModule, X } from 'lucide-angular';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task-modal',
  standalone: true,
  imports: [MatDialogModule, LucideAngularModule, CommonModule, FormsModule],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css',
})
export class NewTaskModalComponent {
  readonly X = X;

  //Propriedades da task
  title = '';
  description = '';
  deadLineDate!: Date;

  @Output() taskCreated = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<NewTaskModalComponent>,
    public taskService: TaskService
  ) {}

  closeModal() {
    this.dialogRef.close('');
  }

  onSubmit() {
    const taskPayload: Task = {
      title: this.title,
      description: this.description,
      status: 'pendente',
      deadLineDate: this.deadLineDate
    };

    console.log('Task Payload:', taskPayload);

    this.taskService.createTask(taskPayload).subscribe({
      next: (response) => {
        console.log('Tarefa criada com sucesso', response);
        this.taskCreated.emit();
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Erro ao criar a tarefa', error);
      }
    });
  }
}
