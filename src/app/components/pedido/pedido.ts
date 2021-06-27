import { ItemPedido } from './itemPedido'

export class Pedido {
      id?: string
      itens: ItemPedido[]
      clienteId: string
      revistaId: string
}