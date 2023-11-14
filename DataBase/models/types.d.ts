export type TIMESTAMP = number

export type UsuarioID = number
export type ComidaID = number
export type ComidaCategoriaID = number
export type PedidoID = number
export type FacturaID = number

export interface Usuario {
  id: UsuarioID
  nombre: string
  apellido: string
  usuarioname: string
  email: string
  password: string
  create_time: TIMESTAMP
}

export interface Comida {
  id: ComidaID
  nombre: string
  descripcion: string
  precio: number
  cantidad: number
  imagen: string
  categoria_id: ComidaCategoriaID
}

export interface ComidaCategoria {
  id: ComidaCategoriaID
  nombre: string
  descripcion: string
}

export interface Pedido {
  id: PedidoID
  usuario_id: UsuarioID
}

export interface PedidoHasComida {
  pedido_id: PedidoID
  comida_id: ComidaID
}

export interface Factura {
  id: FacturaID
  detalles: string
  total: number
  create_time: TIMESTAMP
  pedido_id: PedidoID
  usuario_id: UsuarioID
}
