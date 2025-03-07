import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ImageData {
  url: string;
  comment: string;
  severity: 'mild' | 'moderate' | null;
}

@Component({
  selector: 'app-classify-datasets',
  imports: [CommonModule, FormsModule],
  templateUrl: './classify-datasets.component.html',
  styleUrl: './classify-datasets.component.css',
})
export class ClassifyDatasetsComponent implements AfterViewInit {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('mainImage') mainImage!: ElementRef;

  selectedIndex = 0;
  scale = 1;
  translateX = 0;
  translateY = 0;
  isPanning = false;
  startX = 0;
  startY = 0;
  lastX = 0;
  lastY = 0;

  thumbnails = [
    '/assets/images/16_left (1).jpeg',
    '/assets/imaeges/16_left.jpeg',
    '/assets/images/1663_right.jpeg',
    '/assets/images/1663_right.jpeg',
  ];

  images: ImageData[] = [
    {
      url: '/assets/images/16_left (1).jpeg',
      comment: '',
    severity: null
    },
    {
      url: '/assets/images/16_left.jpeg',
      comment: '',
    severity: null
    },
    {
      url: '/assets/images/1663_right.jpeg',
      comment: '',
    severity: null
    },
    {
      url: '/assets/images/1663_right.jpeg',
      comment: '',
    severity: null
    },
  ];

  isFormValid(): boolean {
    return !!this.currentImage.severity;
  }

  get currentImage(): ImageData {
    return this.images[this.selectedIndex];
  }

  selectImage(index: number) {
    this.selectedIndex = index;
    this.resetView();
  }

  nextImage() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectImage(this.selectedIndex + 1);
    }
  }

  previousImage() {
    if (this.selectedIndex > 0) {
      this.selectImage(this.selectedIndex - 1);
    }
  }

  get selectedImage(): string {
    return this.thumbnails[this.selectedIndex];
  }

  ngAfterViewInit() {
    this.resetView();
  }

  getTransform(): string {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
  }

  zoomIn() {
    this.scale = Math.min(this.scale * 1.2, 5);
  }

  zoomOut() {
    this.scale = Math.max(this.scale / 1.2, 0.5);
  }

  resetView() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }

  startPan(event: MouseEvent) {
    this.isPanning = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }

  pan(event: MouseEvent) {
    if (!this.isPanning) return;

    const dx = event.clientX - this.lastX;
    const dy = event.clientY - this.lastY;

    this.translateX += dx;
    this.translateY += dy;

    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }

  endPan() {
    this.isPanning = false;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
  }

  onSubmit() {
    // Here you could add API call to save the data
    console.log('Saving data for image', this.selectedIndex, this.currentImage);

    // Move to next image if available
    if (this.selectedIndex < this.images.length - 1) {
      this.nextImage();
    }
  }
}
