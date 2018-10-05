import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneInComponent } from './signe-in.component';

describe('SigneInComponent', () => {
  let component: SigneInComponent;
  let fixture: ComponentFixture<SigneInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigneInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
