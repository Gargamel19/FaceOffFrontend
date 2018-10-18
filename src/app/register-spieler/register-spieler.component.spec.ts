import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpielerComponent } from './register-spieler.component';

describe('SigneInComponent', () => {
  let component: RegisterSpielerComponent;
  let fixture: ComponentFixture<RegisterSpielerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSpielerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSpielerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
