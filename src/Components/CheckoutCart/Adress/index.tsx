import { ContainerCheckout } from '../styles'
import { Button } from '../../../Containers/ModalCart/styles'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { changeCartModal } from '../../../store/reducer/cart'
import { addAdress } from '../../../store/reducer/order'
import * as Yup from 'yup'
import { RootReducer } from '../../../store'

const CheckoutAdress = () => {
  const { orderCheckout } = useSelector((state: RootReducer) => state.order)
  const dispatch = useDispatch()

  // const formAdress = useFormik({
  //   initialValues: {
  //     NomeReceber: '',
  //     Endereco: '',
  //     CidadeEndereco: '',
  //     CepEndereco: '',
  //     NumeroEndereco: '',
  //     ComplementoEndereco: ''
  //   },
  //   validationSchema: Yup.object({
  //     NomeReceber: Yup.string()
  //       .min(5, 'Nome precisa ter pelo menos 5 caracteres')
  //       .required('o campo é obrigatório'),
  //     Endereco: Yup.string()
  //       .min(1, 'seu endereço precisa ser válido')
  //       .required('o campo é obrigatório'),
  //     CidadeEndereco: Yup.string()
  //       .min(5, 'seu cidade precisa ser válida')
  //       .required('campo obrigatório'),
  //     CepEndereco: Yup.string()
  //       .min(8, 'seu cep precisa ser válido')
  //       .required('o campo é obrigatório'),
  //     NumeroEndereco: Yup.string()
  //       .min(1, 'seu número de endereço precisa ser válido')
  //       .required('o campo é obrigatório'),
  //     ComplementoEndereco: Yup.string().min(
  //       1,
  //       'seu número de endereço precisa ser válido'
  //     )
  //   }),
  //   onSubmit: async (values) => {
  //     await addAdressStore(
  //       values.NomeReceber,
  //       values.Endereco,
  //       values.CidadeEndereco,
  //       values.CepEndereco,
  //       values.NumeroEndereco,
  //       values.ComplementoEndereco
  //     )
  //     console.log(orderCheckout)
  //     dispatch(changeCartModal('payment'))
  //   }
  // })

  //////////////////////FUNCTIONS//////////////////////////

  // const RetornaAoCarrinho = () => {
  //   dispatch(changeCartModal('order'))
  // }

  // const addAdressStore = (
  //   receiver: string,
  //   endereco: string,
  //   cidade: string,
  //   cep: string,
  //   number: string,
  //   complemento?: string
  // ) => {
  //   dispatch(
  //     addAdress({
  //       receiver: receiver,
  //       adress: {
  //         description: endereco,
  //         city: cidade,
  //         zipCode: cep,
  //         number: parseInt(number),
  //         complement: complemento
  //       }
  //     })
  //   )
  // }

  return (
    // <ContainerCheckout>
    //   <p>Entrega</p>
    //   <form onSubmit={formAdress.handleSubmit}>
    //     <label htmlFor="NomeReceber">
    //       <span>Quem irá receber</span>
    //       <input
    //         type="text"
    //         id="NomeReceber"
    //         name="NomeReceber"
    //         onBlur={formAdress.handleBlur}
    //         onChange={formAdress.handleChange}
    //         value={formAdress.values.NomeReceber}
    //       />
    //     </label>
    //     <label htmlFor="Endereco">
    //       <span>Endereço</span>
    //       <input
    //         type="text"
    //         id="Endereco"
    //         name="Endereco"
    //         onBlur={formAdress.handleBlur}
    //         onChange={formAdress.handleChange}
    //         value={formAdress.values.Endereco}
    //       />
    //     </label>
    //     <label htmlFor="CidadeEndereco">
    //       <span>Cidade</span>
    //       <input
    //         type="text"
    //         id="CidadeEndereco"
    //         name="CidadeEndereco"
    //         onBlur={formAdress.handleBlur}
    //         onChange={formAdress.handleChange}
    //         value={formAdress.values.CidadeEndereco}
    //       />
    //     </label>
    //     <div className="Input-Flex-50">
    //       <label htmlFor="CepEndereco">
    //         <span>CEP</span>
    //         <input
    //           type="text"
    //           id="CepEndereco"
    //           name="CepEndereco"
    //           onBlur={formAdress.handleBlur}
    //           onChange={formAdress.handleChange}
    //           value={formAdress.values.CepEndereco}
    //         />
    //       </label>
    //       <label htmlFor="NumeroEndereco">
    //         <span>Número</span>
    //         <input
    //           type="text"
    //           id="NumeroEndereco"
    //           name="NumeroEndereco"
    //           onBlur={formAdress.handleBlur}
    //           onChange={formAdress.handleChange}
    //           value={formAdress.values.NumeroEndereco}
    //         />
    //       </label>
    //     </div>
    //     <label htmlFor="ComplementoEndereco">
    //       <span>Complemento (opcional)</span>
    //       <input
    //         type="text"
    //         id="ComplementoEndereco"
    //         name="ComplementoEndereco"
    //         onBlur={formAdress.handleBlur}
    //         onChange={formAdress.handleChange}
    //         value={formAdress.values.ComplementoEndereco}
    //       />
    //     </label>
    //     <div className="Buttons">
    //       <Button type="submit">Continuar pagamento</Button>
    //       <Button onClick={() => RetornaAoCarrinho()}>
    //         Voltar para o carrinho
    //       </Button>
    //     </div>
    //   </form>
    // </ContainerCheckout>
  )
}

export default CheckoutAdress
