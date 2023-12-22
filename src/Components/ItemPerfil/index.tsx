import { MouseEventHandler } from 'react'
import { ItemCardapio } from './styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducer/cart'

export type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  clicou: MouseEventHandler
}

const Item = ({ id, foto, nome, descricao, preco, clicou }: Props) => {
  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 165)
    }
    return descricao
  }

  function addItemOnCart() {
    dispatch(
      add({
        id: id,
        nome: nome,
        descricao: descricao,
        foto: foto,
        preco: preco
      })
    )
    // dispatch(open())
  }

  return (
    <>
      <ItemCardapio>
        <div className="cardapio_content">
          <div className="item_container" onClick={clicou}>
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <p>
              {getDescricao(descricao)} <a> ... ver mais</a>
            </p>
          </div>
          <button onClick={() => addItemOnCart()}>Adicionar ao carrinho</button>
        </div>
      </ItemCardapio>
    </>
  )
}

export default Item

215
