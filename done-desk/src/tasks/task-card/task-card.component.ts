import { Component, Input } from '@angular/core';
import { Calendar, Clock, MoreVertical, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Task, mockTasks } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MoreVertical = MoreVertical;

  @Input() task!: Task;

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  isOverdue(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate < today;
  }
}
