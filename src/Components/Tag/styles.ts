import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'

export const TagContainer = styled.div`
  padding: 6px 4px;
  display: inline-block;
  color: ${Cores.corFonteWhite1};
  background-color: ${Cores.corFonte1};
  margin-left: 8px;
  span {
    display: flex;
    align-items: center;
    color: ${Cores.corFonteWhite1};
    gap: 8px;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
  }
`
