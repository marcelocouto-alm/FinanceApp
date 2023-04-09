import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Poppins', sans-serif;
  background-color: #212728;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
}
`;

export default GlobalStyle;