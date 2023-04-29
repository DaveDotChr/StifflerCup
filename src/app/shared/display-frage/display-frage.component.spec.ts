import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFrageComponent } from './display-frage.component';

describe('DisplayFrageComponent', () => {
  let component: DisplayFrageComponent;
  let fixture: ComponentFixture<DisplayFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
