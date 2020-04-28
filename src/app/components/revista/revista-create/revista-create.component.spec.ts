import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaCreateComponent } from './revista-create.component';

describe('RevistaCreateComponent', () => {
  let component: RevistaCreateComponent;
  let fixture: ComponentFixture<RevistaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
