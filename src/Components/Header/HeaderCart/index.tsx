import Logo from '../../../assets/images/logo.svg'
import { HeaderContainer, TextHeader } from './styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  Cart: number
}

const HeaderCart = ({Cart}: Props) => {
  const navigate = useNavigate();

  const NavigateHome = ()=>{
    navigate('/')
  }

  return(
    <HeaderContainer>
      <div className="container">
        <TextHeader>
          Restaurantes
        </TextHeader>
        <img onClick={()=>NavigateHome()} src={Logo} alt="efood" />
        <TextHeader>{Cart} produto(s) no carrinho </TextHeader>
      </div>
    </HeaderContainer>
  )
}

export default HeaderCart
