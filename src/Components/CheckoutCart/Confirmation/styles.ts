import styled from 'styled-components'
import { Cores } from '../../../styles'
import { Button } from '../../../Containers/ModalCart/styles'

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
