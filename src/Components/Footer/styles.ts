import styled from "styled-components";
import { Cores } from "../../styles";

export const FooterSection = styled.footer`
  width: 100vw;
  padding: 40px 0;
  background-color: ${Cores.backgroundFooter};
`

export const SocialMedia = styled.div`
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 30px;
  img{
    margin: 0 4px;
  }
`

export const FContainer = styled.div`
  p{
    margin-top: 80px;
    color: ${Cores.corFonte1};
    font-family: Roboto;
    font-size: 10px;
    font-weight: 400;
  }
  text-align: center;
  margin: 0 auto;
  width: 480px;
`
