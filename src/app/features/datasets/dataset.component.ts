import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddDatasetComponent } from './add-dataset/add-dataset.component';

@Component({
  selector: 'app-dataset',
  imports: [CommonModule, RouterLink, AddDatasetComponent],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.css',
})
export class DatasetComponent {}
