import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Check, Clock, ListCheck, LucideAngularModule, Plus } from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, LucideAngularModule.pick({ Plus, Check, Clock, ListCheck })],
})
export class TasksModule {}
