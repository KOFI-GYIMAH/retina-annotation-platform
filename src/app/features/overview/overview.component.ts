import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDatasets } from '@store/datasets/datasets.actions';
import { selectDatasets } from '@store/datasets/datasets.selectors';
import { getRelativeDate } from '@utils/date-utils';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { MetricsService } from './../../core/services/api/metrics.service';

interface DashboardData {
  activeAnnotators: number;
  annotatedImages: number;
  pendingReview: number;
  pendingReviewPercentage: number;
  totalImages: number;
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    SelectButtonModule,
    SidebarModule,
    ChartModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  images = [
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
      name: '31461_left.jpeg',
      date: '2025-03-06T01:39:27.462102',
      severity: 'No DR',
      underReview: false,
    },
  ];

  metrics: DashboardData = {} as DashboardData;

  loadingDatasets: boolean = true;
  datasets: any[] = [];

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store,
    private metricsService: MetricsService
  ) {}

  getRelativeDate = getRelativeDate;

  themeEffect = effect(() => {
    this.initChart();
  });

  ngOnInit() {
    this.store.dispatch(loadDatasets());
    this.store.select(selectDatasets).subscribe((datasets) => {
      this.datasets = datasets;
      this.loadingDatasets = false;
    });
    this.initChart();

    this.getDashboardStats();
  }

  getDashboardStats() {
    this.metricsService.getGlobalMetrics().subscribe((res) => {
      console.log(res);
      this.metrics = res.data;
    });
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.data = {
        labels: [
          'Volta Region Dataset',
          'Greater Accra Region Dataset',
          'Tema Community Dataset',
          'Ashanti Region Dataset',
        ],
        datasets: [
          {
            label: 'No DR',
            backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
            borderColor: documentStyle.getPropertyValue('--p-green-500'),
            data: [65, 56, 0, 81, 56, 55, 40],
          },
          {
            label: 'Mild NPDR',
            backgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
            borderColor: documentStyle.getPropertyValue('--p-blue-500'),
            data: [66, 76, 0, 19, 56, 27, 87],
          },
          {
            label: 'Moderate NPDR',
            backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
            borderColor: documentStyle.getPropertyValue('--p-orange-500'),
            data: [28, 65, 1, 46, 86, 27, 55],
          },
          {
            label: 'Severe NPDR',
            backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
            borderColor: documentStyle.getPropertyValue('--p-red-500'),
            data: [76, 23, 45, 98, 86, 27, 78],
          },
          {
            label: 'PDR',
            backgroundColor: documentStyle.getPropertyValue('--p-red-800'),
            borderColor: documentStyle.getPropertyValue('--p-red-800'),
            data: [34, 12, 40, 19, 34, 27, 90],
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
