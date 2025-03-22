import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HotToastService } from '@ngxpert/hot-toast';
import { DatasetService } from '@services/api/dataset.service';
import { addToDatasetsList } from '@store/datasets/datasets.actions';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-dataset',
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './add-dataset.component.html',
  styleUrl: './add-dataset.component.css',
})
export class AddDatasetComponent implements OnInit {
  visible: boolean = false;
  loading: boolean = false;
  newDatasetName: string = '';

  constructor(
    private datasetService: DatasetService,
    private toast: HotToastService,
    private store: Store
  ) {}

  ngOnInit(): void {}

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    if (!this.newDatasetName) return;
    this.loading = true;

    this.datasetService.createDataset(this.newDatasetName).subscribe({
      next: (res: any) => {
        this.store.dispatch(
          addToDatasetsList({
            dataset: {
              sampleImages: 0,
              name: res.data.name,
            },
          })
        );
        this.toast.success(
          `Dataset ${this.newDatasetName} created successfully`
        );
        this.loading = false;
        this.visible = false;
        this.newDatasetName = '';
      },
      error: (err) => {
        this.loading = false;
        this.toast.error('Something went wrong');
        this.loading = false;
      },
    });
  }
}
