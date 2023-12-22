import { ItensContainer as ItensContainerStyles } from './styles'
import Item from '../../Components/ItemPerfil'

export type CardapioType = {
  foto: string
  preco?: number
  id?: number
  nome: string
  descricao: string
  porcao?: string
}

type Props = {
  listaProdutos?: CardapioType[]
  clicou: (e: CardapioType) => void
}

const ItensContainer = ({ listaProdutos, clicou }: Props) => {
  if (listaProdutos) {
    return (
      <ItensContainerStyles className="container">
        {listaProdutos.map((e) => (
          <Item
            id={e.id!}
            preco={e.preco!}
            key={e.id}
            nome={e.nome}
            descricao={e.descricao}
            clicou={() => clicou(e)}
            foto={e.foto}
          />
        ))}
      </ItensContainerStyles>
    )
  }
  return <h2>Carregando ...</h2>
}

export default ItensContainer
