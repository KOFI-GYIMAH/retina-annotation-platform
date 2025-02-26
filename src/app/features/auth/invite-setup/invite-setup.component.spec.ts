import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSetupComponent } from './invite-setup.component';

describe('InviteSetupComponent', () => {
  let component: InviteSetupComponent;
  let fixture: ComponentFixture<InviteSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
