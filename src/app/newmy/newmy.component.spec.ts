import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmyComponent } from './newmy.component';

describe('NewmyComponent', () => {
  let component: NewmyComponent;
  let fixture: ComponentFixture<NewmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
