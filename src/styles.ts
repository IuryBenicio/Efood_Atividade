import { createGlobalStyle } from "styled-components";

export const Cores = {
  background: '#FFF8F2',
  corFonte1: '#E66767',
  corFonteWhite1: "#FFEBD9",
  backgroundFooter: '#FFEBD9',
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
  width: 1024px;
  margin: 0 auto;
}

body{
  background-color: ${Cores.background};
}
`


