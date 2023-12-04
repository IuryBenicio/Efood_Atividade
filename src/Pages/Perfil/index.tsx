import HeaderCart from "../../Components/Header/HeaderCart";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";
import ModalPerfil from "../../Components/ModalPerfil";
import { PerfilContainer, ItensContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Item as ItemProps } from "../Home";
import Item from "../../Components/ItemPerfil";

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

function Perfil(){
  const { id } = useParams()
  const [Restaurante, setRestaurante] = useState<ItemProps[]>([])
  const [Selecionado, setSelecionado] = useState(false)
  const [Cardapio, setCardapio] = useState<Cardapio[]>([])

  const selecionado = ()=>{
    setSelecionado(true)
  }

  // function getCardapio(){
  //   const Tudo: ItemProps[] = Restaurante
  //   const Cardapio: Cardapio[] = []

  //   for (let item of Tudo){
  //     Cardapio.push(
  //       {
  //         'foto': `${item.cardapio[{}].foto}`,
  //         'id': item.cardapio[{}].id,
  //         'preco': item.cardapio[{}].preco,
  //         'descricao': `${item.cardapio[{}].descricao}`,
  //         'nome': `${item.cardapio[{}].nome}`,
  //         'porcao': `${item.cardapio[{}].porcao}`
  //       }
  //     )
  //   }

  // }

/////////////////////////REQUISIÇÕES/////////////////////////
  async function getItems(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response =
    await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setRestaurante(res))
    .then(

    )
    .then(res => {
      setCardapio(res.cardapio)
    })
    return
  }

  useEffect(()=>{
    getItems()
  },[id])



  return(
    <PerfilContainer>
      <HeaderCart />
      <BannerMenu capa={Restaurante.capa} tipo={Restaurante.tipo} titulo={Restaurante.titulo}/>
      <ItensContainer className="container">
        {Restaurante.cardapio.map((e)=>(
          <Item key={e.id} titulo={e.nome} foto={e.foto} descricao={e.descricao} clicou={() => selecionado()}/>
        ))}

      </ItensContainer>
      {Selecionado && (<ModalPerfil />)}
      <Footer />
    </PerfilContainer>
  )
}

export default Perfil
