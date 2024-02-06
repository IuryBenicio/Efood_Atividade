import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Carregando = styled.h2`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 8px;
  }
`

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Cores = {
  background: '#FFF8F2',
  corFonte1: '#E66767',
  corFonteWhite1: '#FFEBD9',
  backgroundFooter: '#FFEBD9',
  TextInputColor: '#4b4b4b'
}

export const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

}
.container{
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
}

.display-flex{
  display: flex;
}

body{
  background-color: ${Cores.background};
}
`
