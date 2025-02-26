import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadDatasets } from '@store/datasets/datasets.actions';
import { selectDatasets } from '@store/datasets/datasets.selectors';
import { AddDatasetComponent } from './add-dataset/add-dataset.component';

@Component({
  selector: 'app-dataset',
  imports: [CommonModule, RouterLink, AddDatasetComponent],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.css',
})
export class DatasetComponent implements OnInit {
  datasets: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDatasets());
    this.store.select(selectDatasets).subscribe((datasets) => {
      this.datasets = datasets;
    });
  }
}
