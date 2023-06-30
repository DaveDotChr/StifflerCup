import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragenbrowserComponent } from './fragenbrowser.component';

describe('FragenbrowserComponent', () => {
  let component: FragenbrowserComponent;
  let fixture: ComponentFixture<FragenbrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FragenbrowserComponent]
    });
    fixture = TestBed.createComponent(FragenbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
