import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Check, Clock, ListCheck, LucideAngularModule, Plus } from 'lucide-angular';
import { ViewTasksComponent } from "../tasks/view-tasks/view-tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, ViewTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'done-desk';

  readonly ListCheck = ListCheck;
}
