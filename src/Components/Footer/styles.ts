import styled from "styled-components";
import { Cores } from "../../styles";

export const FooterSection = styled.footer`
  width: 100vw;
  padding: 40px;
  background-color: ${Cores.backgroundFooter};
`

export const SocialMedia = styled.div`
  margin-top: 32.5px;
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
