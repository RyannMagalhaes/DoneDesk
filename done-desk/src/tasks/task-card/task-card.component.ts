import { Component } from '@angular/core';
import { Calendar, Clock, MoreVertical, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MoreVertical = MoreVertical;
}
