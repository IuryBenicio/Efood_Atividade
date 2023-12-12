import HeaderCart from "../../Components/Header/HeaderCart";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";
import ModalPerfil from "../../Components/ModalPerfil";
import ItensContainer, { CardapioType } from "../../Containers/Cardapio";
import { PerfilContainer} from "./styles";
import { Carregando } from "../../styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Item as ItemProps } from "../Home";
import logo from '../../assets/images/logo.svg'

function Perfil(){
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<ItemProps>()
  const [cardapio, setCardapio] = useState<CardapioType[]>([])
  const [Selecionado, setSelecionado] = useState(false)
  const [ItemModal, setItemModal] = useState<CardapioType>()

  const selecionar = (e: CardapioType)=>{
      setSelecionado(true)
      setItemModal(e)
  }

/////////////////////////REQUISIÇÕES/////////////////////////
  async function getItems(){
    const response =
    await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setRestaurante(res))
    .catch(error=>{
      alert('erro na requisição de dados do restaurante')
      console.log(error)
    })
    return response
  }

  async function getCardapio(){
    const response =
    await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setCardapio(res.cardapio))
    .catch(error=>{
      alert('erro na requisição de dados do restaurante')
      console.log(error)
    })
    return response
  }

  useEffect(()=>{
    getCardapio()
    getItems()
  },[id])

  if(cardapio.length <= 0) {
    return(
      <Carregando>
        <img src={logo} alt="efood" />
        <h2>CARREGANDO ...</h2>
      </Carregando>
    )
  }else{
    return(
      <PerfilContainer>
        <HeaderCart />
        <BannerMenu capa={restaurante?.capa} tipo={restaurante?.tipo} titulo={restaurante?.titulo}/>
        <ItensContainer clicou={(e)=> selecionar(e)} listaItens={cardapio} />
        {Selecionado && (<ModalPerfil key={ItemModal?.id} nome={ItemModal?.nome} descricao={ItemModal?.descricao} foto={ItemModal?.foto} porcao={ItemModal?.porcao} preco={ItemModal?.preco}  clicou={()=> setSelecionado(false)}/>)}
        <Footer />
      </PerfilContainer>
    )
  }

}

export default Perfil
