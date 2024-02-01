declare type Item = {
  id?: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: CardapioType[]
}

declare type CardapioType = {
  foto?: string
  preco?: number
  id?: number
  nome?: string
  descricao?: string
  porcao?: string
}
