import { ItemCardapio } from "./styles"

export type Props = {
  titulo: string
  descricao: string
  foto: string
}

const Item = ({titulo, foto, descricao, clicou}: Props)=>{

  const getDescricao = (descricao: string) =>{
    if(descricao.length > 95) {
      return descricao.slice (0, 215)
    }
    return descricao
  }

  return(
    <>
      <ItemCardapio>
        <div className="cardapio_content">
          <div className="item_container">
            <img src={foto} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{getDescricao(descricao)} <a onClick={clicou}>VER MAIS ...</a></p>
          </div>
          <button>Adicionar ao carrinho</button>
        </div>
      </ItemCardapio>
    </>
  )
}

export default Item

215
