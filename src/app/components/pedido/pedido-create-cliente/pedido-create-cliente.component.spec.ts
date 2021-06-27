import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCreateClienteComponent } from './pedido-create-cliente.component';

describe('PedidoCreateClienteComponent', () => {
  let component: PedidoCreateClienteComponent;
  let fixture: ComponentFixture<PedidoCreateClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCreateClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
