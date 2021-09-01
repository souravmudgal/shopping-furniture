import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublebedComponent } from './doublebed.component';

describe('DoublebedComponent', () => {
  let component: DoublebedComponent;
  let fixture: ComponentFixture<DoublebedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublebedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublebedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
