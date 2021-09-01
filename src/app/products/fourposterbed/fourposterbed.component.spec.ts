import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourposterbedComponent } from './fourposterbed.component';

describe('FourposterbedComponent', () => {
  let component: FourposterbedComponent;
  let fixture: ComponentFixture<FourposterbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourposterbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourposterbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
