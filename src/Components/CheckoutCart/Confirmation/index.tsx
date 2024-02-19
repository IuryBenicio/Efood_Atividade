import { Button } from '../../../Containers/ModalCart/styles'
import { ContainerCheckout } from '../styles'
import { TextContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeCartModal } from '../../../store/reducer/cart'
import { RootReducer } from '../../../store'

const Confirmation = () => {
  const { orderCheckout } = useSelector((state: RootReducer) => state.order)

  const dispatch = useDispatch()

  const ReturnCart = () => {
    dispatch(changeCartModal('order'))
    console.log(orderCheckout)
  }

  return (
    <ContainerCheckout>
      <p>Pedido realizado - (ORDER_ID)</p>
      <TextContainer>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </TextContainer>
      <Button onClick={() => ReturnCart()}>Concluir</Button>
    </ContainerCheckout>
  )
}

export default Confirmation
