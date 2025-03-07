import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

interface RetinalImage {
  id: string;
  imageUrl: string;
  patientId: string;
  dateUploaded: Date;
  annotations: Annotation[];
  status: 'pending' | 'resolved';
}

interface Annotation {
  annotatorId: string;
  annotatorName: string;
  severityLevel: number;
  comment: string;
  timestamp: Date;
}

@Component({
  selector: 'app-review-images',
  imports: [CommonModule, ButtonModule, TagModule, DropdownModule, FormsModule],
  templateUrl: './review-images.component.html',
  styleUrl: './review-images.component.css',
})
export class ReviewImagesComponent implements OnInit {
  conflictImages: RetinalImage[] = [];
  selectedImage: RetinalImage | null = null;
  finalSeverityLevel: number | null = null;
  adminComment: string = '';
  severityLevels = [
    { label: 'Level 0 - No DR', value: 0 },
    { label: 'Level 1 - Mild NPDR', value: 1 },
    { label: 'Level 2 - Moderate NPDR', value: 2 },
    { label: 'Level 3 - Severe NPDR', value: 3 },
    { label: 'Level 4 - PDR', value: 4 },
  ];
  loading: boolean = true;

  constructor() {} // private messageService: MessageService // private confirmationService: ConfirmationService,

  ngOnInit(): void {
    // In a real application, this would be a service call
    this.loadConflictImages();
  }

  loadConflictImages(): void {
    // Simulate API call
    setTimeout(() => {
      this.conflictImages = [
        {
          id: 'IMG001',
          imageUrl: '/assets/images/16_left (1).jpeg',
          patientId: 'P12345',
          dateUploaded: new Date('2025-02-27'),
          status: 'pending',
          annotations: [
            {
              annotatorId: 'A001',
              annotatorName: 'Dr. Smith',
              severityLevel: 2,
              comment: 'Shows signs of moderate NPDR with a few microaneurysms',
              timestamp: new Date('2025-02-28'),
            },
            {
              annotatorId: 'A002',
              annotatorName: 'Dr. Johnson',
              severityLevel: 3,
              comment: 'Multiple hemorrhages visible, suggests severe NPDR',
              timestamp: new Date('2025-02-28'),
            },
          ],
        },
        {
          id: 'IMG002',
          imageUrl: '/assets/images/16_left (1).jpeg',
          patientId: 'P54321',
          dateUploaded: new Date('2025-02-26'),
          status: 'pending',
          annotations: [
            {
              annotatorId: 'A001',
              annotatorName: 'Dr. Smith',
              severityLevel: 1,
              comment: 'Mild NPDR with minimal abnormalities',
              timestamp: new Date('2025-02-27'),
            },
            {
              annotatorId: 'A003',
              annotatorName: 'Dr. Williams',
              severityLevel: 0,
              comment: 'No detectable retinopathy',
              timestamp: new Date('2025-02-27'),
            },
          ],
        },
      ];
      this.loading = false;
    }, 1000);
  }

  viewImage(image: RetinalImage): void {
    this.selectedImage = image;
    this.finalSeverityLevel = null;
    this.adminComment = '';
  }

  submitFinalClassification(): void {
    if (!this.selectedImage || this.finalSeverityLevel === null) {
      // this.messageService.add({
      //   severity: 'error',
      //   summary: 'Error',
      //   detail: 'Please select a severity level',
      // });
      return;
    }

    // this.confirmationService.confirm({
    //   message: `Are you sure you want to classify this image as Severity Level ${this.finalSeverityLevel}?`,
    //   header: 'Confirm Classification',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     // In a real app, this would call a service to update the classification
    //     // Update local state for demo purposes
    //     if (this.selectedImage) {
    //       this.selectedImage.status = 'resolved';

    //       // Remove from the list
    //       this.conflictImages = this.conflictImages.filter(
    //         (img) => img.id !== this.selectedImage?.id
    //       );

    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Success',
    //         detail: `Image ${this.selectedImage.id} has been classified as Level ${this.finalSeverityLevel}`,
    //       });

    //       this.selectedImage = null;
    //     }
    //   },
    // });
  }

  cancelClassification(): void {
    this.selectedImage = null;
    this.finalSeverityLevel = null;
    this.adminComment = '';
  }

  getAnnotatorAgreementInfo(image: RetinalImage): string {
    const uniqueLevels = new Set(image.annotations.map((a) => a.severityLevel));
    return `${uniqueLevels.size} different classification${
      uniqueLevels.size > 1 ? 's' : ''
    }`;
  }
}
