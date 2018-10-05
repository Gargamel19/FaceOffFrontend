import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielerXComponent } from './spielerX.component';

describe('SpielerXComponent', () => {
  let component: SpielerXComponent;
  let fixture: ComponentFixture<SpielerXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielerXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielerXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
