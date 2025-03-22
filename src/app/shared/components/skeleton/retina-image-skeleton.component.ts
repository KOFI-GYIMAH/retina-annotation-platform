import { Component } from '@angular/core';

@Component({
  selector: 'retina-image-skeleton',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2 class="text-xl font-semibold mb-3">Retina Images</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="border rounded-lg overflow-hidden">
          <div class="h-40 bg-gray-200 animate-pulse"></div>
          <div class="p-3">
            <div
              class="h-4 bg-gray-200 rounded-md w-3/4 mb-2 animate-pulse"
            ></div>
            <div class="h-3 bg-gray-200 rounded-md w-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UserMenuComponent {}
