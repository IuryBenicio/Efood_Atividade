import styled from 'styled-components'
import { Cores } from '../../styles'

export const CartItemContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Cores.corFonteWhite1};
  display: flex;
  padding: 8px;
  padding-bottom: 12px;
  position: relative;
  margin-bottom: 16px;
  img {
    margin-right: 8px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  .item_title {
    h3 {
      color: ${Cores.corFonte1};
      text-align: center;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    span {
      color: ${Cores.corFonte1};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
  .lixeira {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    bottom: 8px;
    z-index: 2;
    cursor: pointer;
  }
`
