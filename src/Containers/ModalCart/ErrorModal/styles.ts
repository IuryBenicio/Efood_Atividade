import styled from 'styled-components'
import { Cores } from '../../../GlobalStyles'

export const ContainerError = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  span {
    margin-top: 25px;
    padding: 15px;
    border-radius: 8px;
    color: ${Cores.corFonte1};
    background-color: ${Cores.corFonteWhite1};
  }
`
