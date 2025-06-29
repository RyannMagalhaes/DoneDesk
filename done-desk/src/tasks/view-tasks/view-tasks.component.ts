import { Component } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task, mockTasks } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';

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
export class ViewTasksComponent {
  readonly Plus = Plus;
  tasks: Task[] = mockTasks;

  constructor(private dialog: MatDialog) {}

  abrirModal() {
    console.log('Abrindo modal de nova tarefa');
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      width: '400px'
    });
  }
}
