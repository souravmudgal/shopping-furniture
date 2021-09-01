import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebedComponent } from './singlebed.component';

describe('SinglebedComponent', () => {
  let component: SinglebedComponent;
  let fixture: ComponentFixture<SinglebedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglebedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
