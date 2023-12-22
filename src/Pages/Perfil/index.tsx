import { useParams } from 'react-router-dom'
import { useState } from 'react'
import HeaderCart from '../../Components/Header/HeaderCart'
import Footer from '../../Components/Footer'
import BannerMenu from '../../Components/BannerPerfil'
import ModalPerfil from '../../Components/ModalPerfil'
import CartModal from '../../Containers/ModalCart'
import ItensContainer, { CardapioType } from '../../Containers/Cardapio'
import { PerfilContainer } from './styles'
import { Carregando } from '../../styles'
import { useGetRestauranteQuery } from '../../services/api'
import logo from '../../assets/images/logo.svg'

function Perfil() {
  const { id } = useParams()
  const [Selecionado, setSelecionado] = useState(false)
  const [ItemModal, setItemModal] = useState<CardapioType>()

  const selecionar = (e: CardapioType) => {
    setSelecionado(true)
    setItemModal(e)
  }

  /////////////////////////REQUISIÇÕES/////////////////////////
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return (
      <Carregando>
        <img src={logo} alt="efood" />
        <h2>CARREGANDO ...</h2>
      </Carregando>
    )
  } else {
    console.log(restaurante.cardapio)
    return (
      <PerfilContainer>
        <CartModal />
        <HeaderCart />
        <BannerMenu
          capa={restaurante?.capa}
          tipo={restaurante?.tipo}
          titulo={restaurante?.titulo}
        />
        <ItensContainer
          clicou={(e) => selecionar(e)}
          listaProdutos={restaurante?.cardapio}
        />
        {Selecionado && (
          <ModalPerfil
            key={ItemModal?.id}
            nome={ItemModal?.nome}
            descricao={ItemModal?.descricao}
            foto={ItemModal?.foto}
            porcao={ItemModal?.porcao}
            preco={ItemModal?.preco}
            clicou={() => setSelecionado(false)}
          />
        )}
        <Footer />
      </PerfilContainer>
    )
  }
}

export default Perfil
