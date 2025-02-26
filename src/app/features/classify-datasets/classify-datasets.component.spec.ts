import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyDatasetsComponent } from './classify-datasets.component';

describe('ClassifyDatasetsComponent', () => {
  let component: ClassifyDatasetsComponent;
  let fixture: ComponentFixture<ClassifyDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassifyDatasetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassifyDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
