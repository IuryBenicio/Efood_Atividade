import { ModalContainer, ContentContainer, CloseImg } from './styles'
import Close from '../../assets/images/Itens/close 1 (1).png'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducer/cart'

type Props = {
  clicou: () => void
  foto?: string
  nome?: string
  descricao?: string
  porcao?: string
  preco?: number
}

const ModalPerfil = ({
  foto,
  descricao,
  nome,
  porcao,
  preco,
  clicou
}: Props) => {
  const dispatch = useDispatch()

  function addItemOnCart(
    nome: string,
    descricao: string,
    foto: string,
    preco: number
  ) {
    dispatch(
      add({
        nome: nome,
        descricao: descricao,
        foto: foto,
        preco: preco
      })
    )
    // dispatch(open())
  }

  const getPreco = (preco?: number) => {
    if (preco) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
    }
  }

  return (
    <ModalContainer>
      <ContentContainer>
        <CloseImg src={Close} alt="Clique para fechar" onClick={clicou} />
        <div className="containerModal">
          <img src={foto} alt="" />
          <div className="text">
            <h3>{nome}</h3>
            <div className="description">
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <button
              onClick={() => addItemOnCart(nome!, descricao!, foto!, preco!)}
            >
              Adicionar ao carrinho - {getPreco(preco)}
            </button>
          </div>
        </div>
      </ContentContainer>
    </ModalContainer>
  )
}

export default ModalPerfil
