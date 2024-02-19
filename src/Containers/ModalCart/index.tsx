import { useSelector, useDispatch } from 'react-redux'
import {
  ModalCartContainer,
  BackGround,
  CartContainer,
  ContainerNumerosCartao,
  TextContainer,
  Button,
  ContainerCheckout,
  NoItensText
} from './styles'
import { RootReducer } from '../../store'
import {
  ResetCart,
  UpdateTotalPrice,
  changeCartModal,
  close,
  remove
} from '../../store/reducer/cart'
import CartItem from '../../Components/CartItem'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import ErrorModal from './ErrorModal'

const CartModal = () => {
  const dispatch = useDispatch()
  const [errorModal, setErrorModal] = useState(false)
  const [purchase, { isError, isSuccess, data: dataResponse }] =
    usePurchaseMutation()
  const { TotalPrice, items, isOpen, isCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const form = useFormik({
    initialValues: {
      NomeReceber: '',
      Endereco: '',
      CidadeEndereco: '',
      CepEndereco: '',
      NumeroEndereco: '',
      ComplementoEndereco: '',
      //////////////////////////////////
      NomeNoCartao: '',
      NumeroDoCartao: '',
      CVVCartao: '',
      MesVencimentoCartao: '',
      AnoVencimentoCartao: ''
    },
    validationSchema: Yup.object({
      NomeReceber: Yup.string()
        .min(5, 'Nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      Endereco: Yup.string()
        .min(1, 'seu endereço precisa ser válido')
        .required('o campo é obrigatório'),
      CidadeEndereco: Yup.string()
        .min(5, 'seu cidade precisa ser válida')
        .required('campo obrigatório'),
      CepEndereco: Yup.string()
        .min(8, 'seu cep precisa ser válido')
        .required('o campo é obrigatório'),
      NumeroEndereco: Yup.string()
        .min(1, 'seu número de endereço precisa ser válido')
        .required('o campo é obrigatório'),
      ComplementoEndereco: Yup.string().min(
        1,
        'seu número de endereço precisa ser válido'
      ),
      /////////////////////////////////////////////////////
      NomeNoCartao: Yup.string()
        .min(5, 'Nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      NumeroDoCartao: Yup.string()
        .min(13, 'Número do cartão precisa ser válido')
        .max(16, 'preencha com um número de cartão válido')
        .required('o campo é obrigratório'),
      CVVCartao: Yup.string()
        .min(3, 'cvv precisa ser válido')
        .max(3)
        .required('o campo é obrigatório'),
      MesVencimentoCartao: Yup.string()
        .min(2, 'Mês precisa ser válido')
        .max(2)
        .required('o campo é obrigatório'),
      AnoVencimentoCartao: Yup.string()
        .min(2, 'Ano precisa ser válido')
        .max(2)
        .required('o campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item: CardapioType) => ({
          id: item!.id as number,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.NomeReceber,
          adress: {
            description: values.Endereco,
            city: values.CidadeEndereco,
            number: parseInt(values.NumeroEndereco),
            zipCode: values.CepEndereco,
            complement: values.ComplementoEndereco
          }
        },
        payment: {
          card: {
            name: values.NomeNoCartao,
            number: values.NumeroDoCartao,
            code: parseInt(values.CVVCartao),
            expires: {
              month: parseInt(values.MesVencimentoCartao),
              year: parseInt(values.AnoVencimentoCartao)
            }
          }
        }
      })
    }
  })
  useEffect(() => {
    if (isSuccess) {
      dispatch(changeCartModal('confirmation'))
    }
    if (isError) {
      alert('erro ' + isError)
      console.log(isError)
    }
  }, [form])

  ///////////////////////////////////////////////////////////////////////

  const ContinuarCompraEndereco = () => {
    if (items.length >= 1) {
      dispatch(changeCartModal('adress'))
    } else {
      alert('adicione itens ao carrinho')
    }
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador: number, valorAtual: CardapioType) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const getPreco = (preco?: number) => {
    if (preco) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
      dispatch(UpdateTotalPrice(preco!))
    }
  }

  function removeItem(ItemId: number) {
    dispatch(remove(ItemId!))
  }

  const RetornaAoCarrinho = () => {
    dispatch(changeCartModal('order'))
  }

  const ReturnCart = () => {
    dispatch(changeCartModal('order'))
    dispatch(ResetCart())
  }

  function FechaModal() {
    dispatch(close())
  }

  function getError(fieldName: string) {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const borderRed = 'in_error'

    if (estaAlterado && estaInvalido) return borderRed
    return ''
  }

  function ConfirmForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (
      form.values.NomeReceber.length >= 5 &&
      form.values.CidadeEndereco.length >= 1 &&
      form.values.CepEndereco.length >= 8 &&
      form.values.NumeroEndereco.length >= 1 &&
      form.values.Endereco.length >= 1
    ) {
      dispatch(changeCartModal('payment'))
    } else {
      setErrorModal(true)
      setTimeout(() => {
        setErrorModal(false)
      }, 2000)
    }
  }

  return (
    <CartContainer className={isOpen ? 'is_open' : ''}>
      <BackGround onClick={() => FechaModal()}></BackGround>
      {errorModal && <ErrorModal />}
      <ModalCartContainer>
        <aside>
          {items.length >= 1 ? (
            <>
              {isCheckout === 'order' && (
                <>
                  <div className="itensContainer">
                    {items.map((e: CardapioType) => (
                      <CartItem
                        remove={() => removeItem(e.id!)}
                        key={e.id}
                        foto={e.foto!}
                        nome={e.nome!}
                        preco={e.preco}
                      />
                    ))}
                  </div>
                  <div className="valor">
                    <p>Valor total</p>
                    <span>
                      {getPreco(getTotalPrice())
                        ? getPreco(getTotalPrice())
                        : 'R$ 0'}
                    </span>
                  </div>
                  <Button onClick={() => ContinuarCompraEndereco()}>
                    Continuar com a entrega
                  </Button>
                </>
              )}
              {isCheckout === 'adress' && (
                <ContainerCheckout>
                  <p>Entrega</p>
                  <form onSubmit={ConfirmForm}>
                    <label htmlFor="NomeReceber">
                      <span>Quem irá receber</span>
                      <input
                        type="text"
                        id="NomeReceber"
                        name="NomeReceber"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.NomeReceber}
                        className={getError('NomeReceber')}
                      />
                    </label>
                    <label htmlFor="Endereco">
                      <span>Endereço</span>
                      <input
                        type="text"
                        id="Endereco"
                        name="Endereco"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.Endereco}
                        className={getError('Endereco')}
                      />
                    </label>
                    <label htmlFor="CidadeEndereco">
                      <span>Cidade</span>
                      <input
                        type="text"
                        id="CidadeEndereco"
                        name="CidadeEndereco"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.CidadeEndereco}
                        className={getError('CidadeEndereco')}
                      />
                    </label>
                    <div className="Input-Flex-50">
                      <label htmlFor="CepEndereco">
                        <span>CEP</span>
                        <InputMask
                          type="text"
                          id="CepEndereco"
                          name="CepEndereco"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.CepEndereco}
                          className={getError('CepEndereco')}
                          mask="99999-999"
                        />
                      </label>
                      <label htmlFor="NumeroEndereco">
                        <span>Número</span>
                        <input
                          type="text"
                          id="NumeroEndereco"
                          name="NumeroEndereco"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.NumeroEndereco}
                          className={getError('NumeroEndereco')}
                        />
                      </label>
                    </div>
                    <label htmlFor="ComplementoEndereco">
                      <span>Complemento (opcional)</span>
                      <input
                        type="text"
                        id="ComplementoEndereco"
                        name="ComplementoEndereco"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.ComplementoEndereco}
                        className={getError('ComplementoEndereco')}
                      />
                    </label>
                    <div className="Buttons">
                      <Button type="submit">Continuar pagamento</Button>
                      <Button onClick={() => RetornaAoCarrinho()}>
                        Voltar para o carrinho
                      </Button>
                    </div>
                  </form>
                </ContainerCheckout>
              )}
              {isCheckout === 'payment' && (
                <ContainerCheckout>
                  <p>Pagamento - Valor a pagar {getPreco(TotalPrice)}</p>
                  <form onSubmit={form.handleSubmit}>
                    <label htmlFor="NomeNoCartao">
                      <span>Nome no cartão</span>
                      <input
                        type="text"
                        id="NomeNoCartao"
                        name="NomeNoCartao"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.NomeNoCartao}
                        className={getError('NomeNoCartao')}
                      />
                    </label>
                    <ContainerNumerosCartao className="NumerosCartao display-flex">
                      <label htmlFor="NumeroDoCartao">
                        <span>Numero do cartão</span>
                        <input
                          type="text"
                          id="NumeroDoCartao"
                          name="NumeroDoCartao"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.NumeroDoCartao}
                          className={getError('NumeroDoCartao')}
                        />
                      </label>
                      <label htmlFor="CVVCartao">
                        <span>CVV</span>
                        <InputMask
                          mask="999"
                          type="text"
                          id="CVVCartao"
                          name="CVVCartao"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.CVVCartao}
                          className={getError('CVVCartao')}
                        />
                      </label>
                    </ContainerNumerosCartao>
                    <div className="Input-Flex-50">
                      <label htmlFor="MesVencimentoCartao">
                        <span>Mês de vencimento</span>
                        <InputMask
                          mask="99"
                          type="text"
                          id="MesVencimentoCartao"
                          name="MesVencimentoCartao"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.MesVencimentoCartao}
                          className={getError('MesVencimentoCartao')}
                        />
                      </label>
                      <label htmlFor="AnoVencimentoCartao">
                        <span>Ano de vencimento</span>
                        <InputMask
                          mask="99"
                          type="text"
                          id="AnoVencimentoCartao"
                          name="AnoVencimentoCartao"
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.AnoVencimentoCartao}
                          className={getError('AnoVencimentoCartao')}
                        />
                      </label>
                    </div>
                    <div className="Buttons">
                      <Button type="submit">Finalizar pagamento</Button>
                      <Button
                        onClick={() => dispatch(changeCartModal('adress'))}
                      >
                        Voltar para a edição de endereço
                      </Button>
                    </div>
                  </form>
                </ContainerCheckout>
              )}
              {isCheckout === 'confirmation' && (
                <ContainerCheckout>
                  <p>Pedido realizado - {dataResponse?.orderId} </p>
                  <TextContainer>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.{' '}
                    </p>
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                  </TextContainer>
                  <Button onClick={() => ReturnCart()}>Concluir</Button>
                </ContainerCheckout>
              )}
            </>
          ) : (
            <NoItensText>Nenhum item no carrinho</NoItensText>
          )}
        </aside>
      </ModalCartContainer>
    </CartContainer>
  )
}

export default CartModal
