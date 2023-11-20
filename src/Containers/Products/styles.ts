import styled from "styled-components";
import { Cores } from "../../styles";

export const ProductContainer = styled.section`
  padding: 80px 0;
  background-color: ${Cores.background};
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 48px;
    column-gap: 80px;
    li{
      flex-shrink: 0;
      max-width: 472px;
      width: 100%;
      max-height: 398px;
      height: 100%;
        .SaibaMais{
          display: inline-block;
          background-color: ${Cores.corFonte1};
          padding: 4px 6px;
          margin-bottom: 8px;
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
  background-color: ${Cores.corFonte1};
  padding: 4px 6px;
  margin-bottom: 8px;
`

export const ContainerTexT = styled.div`
  border-right: 1px solid ${Cores.corFonte1};
  border-bottom: 1px solid ${Cores.corFonte1};
  border-left: 1px solid ${Cores.corFonte1};
  background: #FFF;
  padding: 0 8px;
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
  padding: 8px 0;
  justify-content: space-between;
`

export const ProductImg = styled.img`
  max-width: 472px;
  width: 100%;
  max-height: 217px;
  height: 100%;
`
