import { MouseEventHandler } from "react"
import { ItemCardapio } from "./styles"

export type Props = {
  foto: string
  nome: string
  descricao: string
  clicou: MouseEventHandler
}

const Item = ({foto, nome, descricao, clicou}: Props)=>{

  const getDescricao = (descricao: string) =>{
    if(descricao.length > 95) {
      return descricao.slice (0, 165)
    }
    return descricao
  }

  return(
    <>
      <ItemCardapio onClick={clicou}>
        <div className="cardapio_content">
          <div className="item_container">
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <p>{getDescricao(descricao)} <a > ... ver mais</a></p>
          </div>
          <button>Adicionar ao carrinho</button>
        </div>
      </ItemCardapio>
    </>
  )
}

export default Item

215
