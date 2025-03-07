import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadDatasets } from '@store/datasets/datasets.actions';
import { selectDatasets } from '@store/datasets/datasets.selectors';

@Component({
  selector: 'app-consensus-review',
  imports: [CommonModule, RouterLink],
  templateUrl: './consensus-review.component.html',
  styleUrl: './consensus-review.component.css',
})
export class ConsensusReviewComponent implements OnInit {
  datasets: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDatasets());
    this.store.select(selectDatasets).subscribe((datasets) => {
      this.datasets = datasets;
    });
  }
}
