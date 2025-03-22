import { Component } from '@angular/core';

@Component({
  selector: 'table-skeleton',
  standalone: true,
  imports: [],
  template: `
    <div class="border rounded-lg overflow-hidden mb-6">
      <!-- Table header skeleton -->
      <div class="bg-gray-50 p-3 flex border-b">
        <div class="h-5 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
        <div class="h-5 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"></div>
        <div class="h-5 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"></div>
        <div class="h-5 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"></div>
      </div>

      <!-- Table rows skeleton -->
      <div class="divide-y">
        <div class="p-3 flex">
          <div class="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
          <div
            class="h-4 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"
          ></div>
          <div
            class="h-4 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"
          ></div>
          <div
            class="h-4 bg-gray-200 rounded-md w-1/4 ml-4 animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  `,
})
export class UserMenuComponent {}
