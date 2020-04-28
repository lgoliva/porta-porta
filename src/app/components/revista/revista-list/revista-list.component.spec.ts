import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaListComponent } from './revista-list.component';

describe('RevistaListComponent', () => {
  let component: RevistaListComponent;
  let fixture: ComponentFixture<RevistaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
