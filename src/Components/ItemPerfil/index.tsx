import { ItemCardapio } from "./styles"

export type Props = {
  titulo: string
  descricao: string
  foto: string
  clicou: ()=> void
}

const Item = ({titulo, foto, descricao, clicou}: Props)=>{

  const getDescricao = (descricao: string) =>{
    if(descricao.length > 95) {
      return descricao.slice (0, 248)
    }
    return descricao
  }

  return(
    <>
      <ItemCardapio>
        <div className="cardapio_content">
          <div onClick={clicou} className="item_container">
            <img src={foto} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{getDescricao(descricao)} <a onClick={clicou}> ... ver mais</a></p>
          </div>
          <button>Adicionar ao carrinho</button>
        </div>
      </ItemCardapio>
    </>
  )
}

export default Item

215
