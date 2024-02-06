import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'

export const Button = styled.button`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  color: ${Cores.corFonte1};
  background-color: ${Cores.corFonteWhite1};
  border: none;
  cursor: pointer;
`

export const NoItensText = styled.p`
  color: ${Cores.corFonteWhite1};
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  margin-top: 40px;
`

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

export const ContainerNumerosCartao = styled.div`
  label:first-child {
    margin-right: 30px;
    width: 228px;
  }
  label:last-child {
    width: 87px;
  }
`

export const TextContainer = styled.div`
  p {
    color: ${Cores.corFonteWhite1};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  ${Button} {
    cursor: pointer;
  }
`

export const BackGround = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
`

export const CartContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: none;
  &.is_open {
    display: flex;
  }
`

export const ModalCartContainer = styled.div`
  width: 360px;
  position: absolute;
  right: 0;
  padding: 32px 8px;
  background-color: ${Cores.corFonte1};
  height: 100%;
  z-index: 2;
  button {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    color: ${Cores.corFonte1};
    background-color: ${Cores.corFonteWhite1};
    border: none;
    cursor: pointer;
  }
  .valor {
    margin-top: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    color: ${Cores.corFonteWhite1};
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
