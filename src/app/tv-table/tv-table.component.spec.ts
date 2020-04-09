import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTableComponent } from './tv-table.component';

describe('TvTableComponent', () => {
  let component: TvTableComponent;
  let fixture: ComponentFixture<TvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
