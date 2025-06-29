import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LucideAngularModule, X } from 'lucide-angular';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-modal',
  standalone: true,
  imports: [MatDialogModule, LucideAngularModule, CommonModule],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css',
})
export class NewTaskModalComponent {
  readonly X = X;

  constructor(
    public dialogRef: MatDialogRef<NewTaskModalComponent>
  ) {}

  closeModal() {
    this.dialogRef.close('');
  }

  onSubmit() {}
}
