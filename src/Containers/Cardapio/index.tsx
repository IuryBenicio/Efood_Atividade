import { ItensContainer as ItensContainerStyles } from "./styles"
import Item from "../../Components/ItemPerfil"
import { useEffect } from "react"

export type CardapioType = {
  foto: string
  preco?: number
  id?: number
  nome: string
  descricao: string
  porcao?: string
}

type Props = {
  listaItens: CardapioType[]
  clicou: (e: CardapioType)=> void
}

const ItensContainer = ({listaItens, clicou}: Props)=>{

  useEffect(()=>{
    console.log(listaItens)
  },[listaItens])

  return(
    <ItensContainerStyles  className="container">
      {listaItens.map((e)=>(
        <Item clicou={()=>clicou(e)} key={e.id} nome={e.nome} descricao={e.descricao} foto={e.foto} />
      ))}
    </ItensContainerStyles>
  )
}

export default ItensContainer
