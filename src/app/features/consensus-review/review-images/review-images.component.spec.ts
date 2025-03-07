import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewImagesComponent } from './review-images.component';

describe('ReviewImagesComponent', () => {
  let component: ReviewImagesComponent;
  let fixture: ComponentFixture<ReviewImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
