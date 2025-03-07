import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsensusReviewComponent } from './consensus-review.component';

describe('ConsensusReviewComponent', () => {
  let component: ConsensusReviewComponent;
  let fixture: ComponentFixture<ConsensusReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsensusReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsensusReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
