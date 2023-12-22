import { CartItemContainer } from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.svg'

type Props = {
  nome: string
  preco?: number
  foto: string
  remove: () => void
}

const CartItem = ({ remove, nome, preco, foto }: Props) => {
  const getPreco = (preco?: number) => {
    if (preco) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
    }
  }

  return (
    <CartItemContainer>
      <img onClick={() => remove()} className="lixeira" src={lixeira} />
      <img src={foto} alt="" />
      <div className="item_title">
        <h3>{nome}</h3>
        <span>{getPreco(preco)}</span>
      </div>
    </CartItemContainer>
  )
}

export default CartItem
