import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListClienteComponent } from './pedido-list-cliente.component';

describe('PedidoListClienteComponent', () => {
  let component: PedidoListClienteComponent;
  let fixture: ComponentFixture<PedidoListClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoListClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoListClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
