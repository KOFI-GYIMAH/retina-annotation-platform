import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

interface FileType {
  name: string;
  count: number;
  used: number;
}

@Component({
  selector: 'app-upload-dataset',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './upload-dataset.component.html',
  styleUrl: './upload-dataset.component.css',
})
export class UploadDatasetComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  uploadedFiles: FileType[] = [
    { name: 'Files', count: 7, used: 1000 },
    { name: 'Video Files', count: 10, used: 10 },
    { name: 'DICOM Files', count: 0, used: 10 },
    // { name: 'PDF Files', count: 0, used: 10 },
  ];

  supportedFileTypes: string[] = [
    '.avi',
    '.bmp',
    '.dcm',
    '.gz',
    '.hevc',
    '.jpeg',
    '.jpg',
    '.mkv',
    '.mov',
    '.mp4',
    '.ndpi',
    '.nii',
    '.pdf',
    '.png',
    '.rvg',
    '.svs',
    '.tif',
    '.tiff',
    '.qtif',
    '.webp',
  ];

  cliCommands = [
    {
      label: 'Image upload via CLI',
      command: '$ darwin dataset push andurar/d...',
    },
    {
      label: 'To include multiple folders',
      command: '$ darwin dataset push andurar/diabetic-retin...',
    },
    {
      label: 'To upload video',
      command: '$ darwin dataset push andurar/diabetic-retin...',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClose(): void {
    // this.closeModal.emit();
  }

  onFilesDrop(event: DragEvent): void {
    event.preventDefault();
    // Handle file dropping logic
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  getTotalUploaded(): string {
    return `${this.uploadedFiles[0].count} of ${this.uploadedFiles[0].used}`;
  }

  copyToClipboard(command: string): void {
    navigator.clipboard.writeText(command);
    // Optional: Show toast notification
  }

  uploadFiles(): void {
    // Handle file upload logic
  }
}
