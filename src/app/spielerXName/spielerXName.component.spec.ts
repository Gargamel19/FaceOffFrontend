import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielerXNameComponent } from './spielerXName.component';

describe('SpielerXNameComponent', () => {
  let component: SpielerXNameComponent;
  let fixture: ComponentFixture<SpielerXNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielerXNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielerXNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
