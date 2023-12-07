import HeaderCart from "../../Components/Header/HeaderCart";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";
import ModalPerfil from "../../Components/ModalPerfil";
import { PerfilContainer, ItensContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Item as ItemProps } from "../Home";
import Item from "../../Components/ItemPerfil";

export interface CardapioType {
  foto: string
  preco: number
  id?: number
  nome: string
  descricao: string
  porcao: string
}

function Perfil(){
  const { id } = useParams()
  const [Restaurante, setRestaurante] = useState<ItemProps[]>([])
  const [cardapio, setCardapio] = useState<CardapioType[]>([])
  const [Selecionado, setSelecionado] = useState(false)
  const [ItemModal, setItemModal] = useState<CardapioType[]>([])

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
    // .then(res => console.log(res.cardapio))
    .then(res => setRestaurante(res))
    // .then(()=>console.log(cardapio))
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
      <BannerMenu capa={Restaurante.capa} tipo={Restaurante.tipo} titulo={Restaurante.titulo}/>
      <ItensContainer className="container">
        {cardapio.map((e)=>(
          <Item key={e.id} titulo={e.nome} foto={e.foto} descricao={e.descricao} clicou={() => selecionar(e)}/>
        ))}
      </ItensContainer>
      {Selecionado && (<ModalPerfil nome={ItemModal.nome} descricao={ItemModal.descricao} foto={ItemModal.foto} preco={ItemModal.preco} porcao={ItemModal.porcao} clicou={()=> setSelecionado(false)}/>)}
      <Footer />
    </PerfilContainer>
  )
}

export default Perfil
