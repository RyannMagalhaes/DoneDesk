import { Component } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [LucideAngularModule, TaskCardComponent],
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent {
  readonly Plus = Plus;
}
