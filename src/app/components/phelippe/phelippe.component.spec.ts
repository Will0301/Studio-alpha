import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhelippeComponent } from './phelippe.component';

describe('PhelippeComponent', () => {
  let component: PhelippeComponent;
  let fixture: ComponentFixture<PhelippeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhelippeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhelippeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
