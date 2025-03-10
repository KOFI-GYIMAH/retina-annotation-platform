import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getRelativeDate } from '@utils/date-utils';

interface ImageItem {
  id: string;
  src: string;
  name: string;
  date: string;
  severity: string;
  underReview: boolean
}

@Component({
  selector: 'app-dataset-details',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dataset-details.component.html',
  styleUrl: './dataset-details.component.css',
})
export class DatasetDetailsComponent implements OnInit {
  images: ImageItem[] = [];

  getRelativeDate = getRelativeDate;

  ngOnInit() {
    this.images = [
      {
        id: '1',
        src: 'assets/images/16_left.jpeg',
        name: '16_left (1).jpeg',
        date: '2025-03-09T01:39:27.462102',
        severity: 'No DR',
        underReview: false,
      },
      {
        id: '2',
        src: 'assets/images/16_left.jpeg',
        name: '16_left.jpeg',
        date: '2025-03-10T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: true,
      },
      {
        id: '3',
        src: 'assets/images/16_left.jpeg',
        name: '16936_left.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '4',
        src: 'assets/images/16_left.jpeg',
        name: '31461_left.jpeg',
        date: '2025-03-06T01:39:27.462102',
        severity: 'No DR',
        underReview: false,
      },
      {
        id: '5',
        src: 'assets/images/16_left.jpeg',
        name: 'WhatsApp Image 2024-11-08 at 14.25.37 copy.png',
        date: '2025-01-27T01:39:27.462102',
        severity: 'unclassified',
        underReview: false,
      },
      {
        id: '6',
        src: 'assets/images/16_left.jpeg',
        name: '11988_left.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Moderate NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'No DR',
        underReview: true,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: true,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Moderate NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Moderate NPDR',
        underReview: true,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'No DR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'No DR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Moderate NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'No DR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Moderate NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Mild NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'PDR',
        underReview: false,
      },
      {
        id: '7',
        src: 'assets/images/1663_right.jpeg',
        name: '1663_right.jpeg',
        date: '2025-01-27T01:39:27.462102',
        severity: 'Severe NPDR',
        underReview: false,
      },
    ];
  }

  toggleSelection(image: ImageItem) {
    // image.severity = 'PDR'age.severity; 'PDR'
  }
}
