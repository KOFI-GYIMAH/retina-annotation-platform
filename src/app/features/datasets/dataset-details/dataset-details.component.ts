import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadDatasetComponent } from '../upload-dataset/upload-dataset.component';

interface ImageItem {
  id: string;
  src: string;
  name: string;
  date: string;
  selected: boolean;
}
interface FilterOption {
  name: string;
  count?: number;
  icon?: string;
}

@Component({
  selector: 'app-dataset-details',
  imports: [CommonModule, FormsModule, UploadDatasetComponent],
  templateUrl: './dataset-details.component.html',
  styleUrl: './dataset-details.component.css',
})
export class DatasetDetailsComponent implements OnInit {
  showFolders: boolean = false;
  selectedCount = 2;
  currentUser = {
    name: 'Samuel Gyimah',
    initials: 'SG',
    avatarColor: 'bg-purple-300',
  };
  searchValue = '';

  toggleFolders() {
    this.showFolders = !this.showFolders;
  }

  images: ImageItem[] = [];

  ngOnInit() {
    this.images = [
      {
        id: '1',
        src: 'assets/images/16_left.jpeg',
        name: '16_left (1).jpeg',
        date: '18/12/24',
        selected: true,
      },
      {
        id: '2',
        src: 'assets/images/16_left.jpeg',
        name: '16_left.jpeg',
        date: '18/12/24',
        selected: true,
      },
      {
        id: '3',
        src: 'assets/images/16_left.jpeg',
        name: '16936_left.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '4',
        src: 'assets/images/16_left.jpeg',
        name: '31461_left.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '5',
        src: 'assets/images/16_left.jpeg',
        name: 'WhatsApp Image 2024-11-08 at 14.25.37 copy.png',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '6',
        src: 'assets/images/16_left.jpeg',
        name: '11988_left.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '18/12/24',
        selected: false,
      },
    ];
  }

  toggleSelection(image: ImageItem) {
    image.selected = !image.selected;
  }
  activeWorkflow: string = 'Diabetic Retinopathy';
  statusFilters: FilterOption[] = [
    { name: 'All', count: 7 },
    { name: 'Complete', icon: 'check-circle' },
    { name: 'New', count: 7 },
    { name: 'Being annotated', icon: 'pencil' },
    { name: 'In Review', icon: 'clipboard' },
    { name: 'Processing', icon: 'refresh' },
    { name: 'Uploading', icon: 'cloud-upload' },
  ];

  issuesFilters: FilterOption[] = [{ name: 'All comments', count: 0 }];

  clearSelection(): void {
    this.selectedCount = 0;
  }

  assignToUser(): void {
    console.log('Assign to user action');
  }

  changeStage(): void {
    console.log('Change stage action');
  }

  addTag(): void {
    console.log('Add tag action');
  }

  moveToFolder(): void {
    console.log('Move to folder action');
  }

  setPriority(): void {
    console.log('Set priority action');
  }

  archiveItems(): void {
    console.log('Archive items action');
  }
}
