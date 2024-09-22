import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyCenterComponent } from './policy-center.component';

describe('PolicyCenterComponent', () => {
  let component: PolicyCenterComponent;
  let fixture: ComponentFixture<PolicyCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
