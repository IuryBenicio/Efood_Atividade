import CartItem from '../../Components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { CartContainer } from './styles'
import { ModalCartContainer, BackGround } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducer/cart'

const CartModal = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getPreco = (preco?: number) => {
    if (preco) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
    }
  }

  function FechaModal() {
    dispatch(close())
  }

  function removeItem(ItemId: number) {
    dispatch(remove(ItemId!))
    console.log(ItemId)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is_open' : ''}>
      <BackGround onClick={() => FechaModal()}></BackGround>
      <ModalCartContainer>
        <aside>
          <div className="itensContainer">
            {items.map((e) => (
              <CartItem
                remove={() => removeItem(e.id!)}
                key={e.id}
                foto={e.foto}
                nome={e.nome}
                preco={e.preco}
              />
            ))}
          </div>
          <div className="valor">
            <p>Valor total</p>
            <span>
              {getPreco(getTotalPrice()) ? getPreco(getTotalPrice()) : 'R$ 0'}
            </span>
          </div>
          <button>Continuar com a entrega</button>
        </aside>
      </ModalCartContainer>
    </CartContainer>
  )
}

export default CartModal
