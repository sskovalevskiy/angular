import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrComponent } from './carr.component';

describe('CarrComponent', () => {
  let component: CarrComponent;
  let fixture: ComponentFixture<CarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
