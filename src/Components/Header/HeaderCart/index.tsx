import Logo from '../../../assets/images/logo.svg'
import { HeaderContainer, TextHeader } from './styles'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducer/cart'

const HeaderCart = () => {
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const NavigateHome = () => {
    navigate('/')
  }

  function openCartModal() {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <TextHeader onClick={() => NavigateHome()}>Restaurantes</TextHeader>
        <img onClick={() => NavigateHome()} src={Logo} alt="efood" />
        <TextHeader onClick={() => openCartModal()}>
          {items.length} produto(s) <span>no carrinho</span>{' '}
        </TextHeader>
      </div>
    </HeaderContainer>
  )
}

export default HeaderCart
