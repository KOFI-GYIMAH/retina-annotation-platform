import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  imports: [CommonModule, FormsModule, UploadDatasetComponent, RouterLink],
  templateUrl: './dataset-details.component.html',
  styleUrl: './dataset-details.component.css',
})
export class DatasetDetailsComponent implements OnInit {
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
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
      // {
      //   id: '7',
      //   src: 'assets/images/1663_right.jpeg',
      //   name: '1663_right.jpeg',
      //   date: '18/12/24',
      //   selected: false,
      // },
    ];
  }

  toggleSelection(image: ImageItem) {
    image.selected = !image.selected;
  }
}
