import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamXComponent } from './teamX.component';

describe('TeamXComponent', () => {
  let component: TeamXComponent;
  let fixture: ComponentFixture<TeamXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
