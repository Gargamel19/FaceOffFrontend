import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielerTableComponent } from './spieler-table.component';

describe('SpielerTableComponent', () => {
  let component: SpielerTableComponent;
  let fixture: ComponentFixture<SpielerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
