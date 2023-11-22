import styled from "styled-components";
import { Cores } from "../../styles";

export const Tags = styled.div`
  position: absolute;
  display: flex;
  right: 16px;
  top: 16px;
`

export const ProductContainer = styled.section`
  padding: 80px 0;
  background-color: ${Cores.background};
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 48px;
    column-gap: 80px;
    li{
    display: inline-block;
      .imgContainer{
        position: relative;
      }
      p{
        padding: 16px 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: ${Cores.corFonte1};
      }
    }
  }
`

export const SaibaMais = styled.a`
  display: inline-block;
  color: ${Cores.corFonteWhite1};
  background-color: ${Cores.corFonte1};
  padding: 4px 6px;
`

export const ContainerTexT = styled.div`
  border-right: 1px solid ${Cores.corFonte1};
  border-bottom: 1px solid ${Cores.corFonte1};
  border-left: 1px solid ${Cores.corFonte1};
  background-color: #FFF;
  padding: 8px;
  p{
    padding: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${Cores.corFonte1};
  }
`
export const TitleStars = styled.div`
  .stars{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  display: flex;
  text-align: center;
  font-weight: 700;
  color: ${Cores.corFonte1};
  font-size: 18px;
  justify-content: space-between;
`

export const ProductImg = styled.img`
  max-width: 472px;
  width: 100%;
  max-height: 217px;
  height: 100%;
`
