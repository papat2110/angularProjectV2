import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalFormComponent } from './cal-form.component';

describe('CalFormComponent', () => {
  let component: CalFormComponent;
  let fixture: ComponentFixture<CalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
