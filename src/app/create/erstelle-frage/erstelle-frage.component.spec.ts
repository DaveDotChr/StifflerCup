import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstelleFrageComponent } from './erstelle-frage.component';

describe('ErstelleFrageComponent', () => {
  let component: ErstelleFrageComponent;
  let fixture: ComponentFixture<ErstelleFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErstelleFrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErstelleFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
