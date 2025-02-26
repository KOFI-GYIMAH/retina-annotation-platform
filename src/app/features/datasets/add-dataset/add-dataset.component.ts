import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-dataset',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule],
  templateUrl: './add-dataset.component.html',
  styleUrl: './add-dataset.component.css',
})
export class AddDatasetComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
