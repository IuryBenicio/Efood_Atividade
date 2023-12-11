import HeaderCart from "../../Components/Header/HeaderCart";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";
import ModalPerfil from "../../Components/ModalPerfil";
import { PerfilContainer, ItensContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Item as ItemProps } from "../Home";
import Item from "../../Components/ItemPerfil";

export type CardapioType = {
  foto: string
  preco: number
  id?: number
  nome: string
  descricao: string
  porcao?: string
}

function Perfil(){
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<ItemProps>([])
  const [cardapio, setCardapio] = useState<CardapioType[]>([])
  const [Selecionado, setSelecionado] = useState(false)
  const [ItemModal, setItemModal] = useState<CardapioType>([])

  const selecionar = (e: CardapioType)=>{
      setSelecionado(true)
      setItemModal(e)
      console.log(id)
  }

/////////////////////////REQUISIÇÕES/////////////////////////
  async function getItems(){
    const response =
    await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setRestaurante(res))
    return response
  }

  async function getCardapio(){
    const response =
    await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setCardapio(res.cardapio))
    return response
  }

  useEffect(()=>{
    getCardapio()
    getItems()
  },[id])

  return(
    <PerfilContainer>
      <HeaderCart />
        <BannerMenu Cardapio={restaurante}/>
      <ItensContainer className="container">
        {cardapio.map((e)=>(
          <Item key={e.id} titulo={e.nome} foto={e.foto} descricao={e.descricao} clicou={() => selecionar(e)}/>
        ))}
      </ItensContainer>
      {Selecionado && (<ModalPerfil Cardapio={ItemModal} clicou={()=> setSelecionado(false)}/>)}
      <Footer />
    </PerfilContainer>
  )
}

export default Perfil
