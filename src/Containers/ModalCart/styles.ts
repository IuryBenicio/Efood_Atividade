import styled from 'styled-components'
import { Cores } from '../../styles'

export const BackGround = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100vw;
`

export const CartContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
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
