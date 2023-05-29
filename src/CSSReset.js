import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
}


body{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(102.32deg, #030422 -2.74%, #090114 101.6%);

    display: flex;
    justify-content: center;
    align-items: center;
}
`;
