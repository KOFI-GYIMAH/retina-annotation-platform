import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
// import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface ClassificationClass {
  id: string;
  name: string;
  description: string;
  level: number;
  color: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    TableModule,
    TagModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent implements OnInit {
  classes: ClassificationClass[] = [];
  selectedClass: ClassificationClass | null = null;
  displayDialog: boolean = false;
  isNewClass: boolean = false;
  loading: boolean = true;

  classForm: FormGroup;

  colorOptions = [
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
    { name: 'Blue', value: 'blue' },
    { name: 'Purple', value: 'purple' },
    { name: 'Gray', value: 'gray' },
  ];

  constructor(
    private fb: FormBuilder // private confirmationService: ConfirmationService, // private messageService: MessageService
  ) {
    this.classForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.maxLength(200)],
      level: [null, [Validators.required, Validators.min(0)]],
      color: ['green', Validators.required],
      isDefault: [false],
    });
  }

  loadClasses(): void {
    // Simulate API call
    setTimeout(() => {
      this.classes = [
        {
          id: '1',
          name: 'No DR',
          description: 'No visible signs of diabetic retinopathy',
          level: 0,
          color: 'green',
          isDefault: true,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-01-15'),
        },
        {
          id: '2',
          name: 'Mild NPDR',
          description: 'Mild non-proliferative diabetic retinopathy',
          level: 1,
          color: 'yellow',
          isDefault: false,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-01-15'),
        },
        {
          id: '3',
          name: 'Moderate NPDR',
          description: 'Moderate non-proliferative diabetic retinopathy',
          level: 2,
          color: 'orange',
          isDefault: false,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-01-15'),
        },
        {
          id: '4',
          name: 'Severe NPDR',
          description: 'Severe non-proliferative diabetic retinopathy',
          level: 3,
          color: 'red',
          isDefault: false,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-01-15'),
        },
        {
          id: '5',
          name: 'PDR',
          description: 'Proliferative diabetic retinopathy',
          level: 4,
          color: 'purple',
          isDefault: false,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-01-15'),
        },
      ];
      this.loading = false;
    }, 1000);
  }

  openNew(): void {
    this.classForm.reset({
      color: 'green',
      isDefault: false,
      level: this.getNextAvailableLevel(),
    });
    this.isNewClass = true;
    this.displayDialog = true;
  }

  editClass(classItem: ClassificationClass): void {
    this.selectedClass = { ...classItem };
    this.classForm.patchValue({
      name: classItem.name,
      description: classItem.description,
      level: classItem.level,
      color: classItem.color,
      isDefault: classItem.isDefault,
    });
    this.isNewClass = false;
    this.displayDialog = true;
  }

  deleteClass(classItem: ClassificationClass): void {
    // this.confirmationService.confirm({
    //   message: `Are you sure you want to delete the classification "${classItem.name}"?`,
    //   header: 'Confirm Deletion',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     // In a real app, call service to delete
    //     this.classes = this.classes.filter((c) => c.id !== classItem.id);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: `Classification "${classItem.name}" was deleted`,
    //     });
    //   },
    // });
  }

  saveClass(): void {
    if (this.classForm.invalid) {
      // this.messageService.add({
      //   severity: 'error',
      //   summary: 'Error',
      //   detail: 'Please fill in all required fields correctly',
      // });
      return;
    }

    const formValues = this.classForm.value;

    if (this.isNewClass) {
      // Create new class
      const newClass: ClassificationClass = {
        id: Date.now().toString(),
        name: formValues.name,
        description: formValues.description,
        level: formValues.level,
        color: formValues.color,
        isDefault: formValues.isDefault,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // In a real app, call service to save
      this.classes.push(newClass);
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Success',
      //   detail: `Classification "${newClass.name}" was created`,
      // });
    } else if (this.selectedClass) {
      // Update existing class
      const index = this.classes.findIndex(
        (c) => c.id === this.selectedClass?.id
      );
      if (index !== -1) {
        this.classes[index] = {
          ...this.selectedClass,
          name: formValues.name,
          description: formValues.description,
          level: formValues.level,
          color: formValues.color,
          isDefault: formValues.isDefault,
          updatedAt: new Date(),
        };

        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Success',
        //   detail: `Classification "${formValues.name}" was updated`,
        // });
      }
    }

    // If setting a new default, remove default from others
    if (formValues.isDefault) {
      this.classes.forEach((c) => {
        if (c.id !== (this.selectedClass?.id || 'new') && c.isDefault) {
          c.isDefault = false;
        }
      });
    }

    // Close dialog and reset
    this.displayDialog = false;
    this.selectedClass = null;

    // Sort by level
    this.classes.sort((a, b) => a.level - b.level);
  }

  cancelDialog(): void {
    this.displayDialog = false;
    this.selectedClass = null;
  }

  getNextAvailableLevel(): number {
    if (this.classes.length === 0) return 0;
    const maxLevel = Math.max(...this.classes.map((c) => c.level));
    return maxLevel + 1;
  }

  getSeverityClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      green: 'success',
      yellow: 'warn',
      orange: 'warn',
      red: 'danger',
      blue: 'info',
      purple: 'info',
      gray: 'secondary',
    };
    return colorMap[color] || 'info';
  }

  isUniqueLevel(level: number): boolean {
    return !this.classes.some(
      (c) => c.level === level && c.id !== this.selectedClass?.id
    );
  }
}
