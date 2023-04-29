import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstelleCupComponent } from './erstelle-cup.component';

describe('ErstelleCupComponent', () => {
  let component: ErstelleCupComponent;
  let fixture: ComponentFixture<ErstelleCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErstelleCupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErstelleCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
