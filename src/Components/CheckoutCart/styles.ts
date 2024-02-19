import styled from 'styled-components'
import { Button } from '../../Containers/ModalCart/styles'
import { Cores } from '../../styles'

export const ContainerCheckout = styled.div`
  input {
    background-color: ${Cores.corFonteWhite1};
    border: none;
    color: ${Cores.TextInputColor};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px;
  }
  .in_error {
    border: 4px solid red;
  }
  p {
    color: ${Cores.corFonteWhite1};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  form {
    label {
      span {
        color: ${Cores.corFonteWhite1};
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      input {
        width: 100%;
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }

    .Input-Flex-50 {
      display: flex;
      label:first-child {
        margin-right: 34px;
      }
    }

    ${Button}:not(:last-child) {
      margin-bottom: 8px;
      margin-top: 24px;
    }
  }
`
