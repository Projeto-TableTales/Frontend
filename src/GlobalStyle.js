import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*::-webkit-scrollbar {
        width: 4px;
    }
    *::-webkit-scrollbar-thumb {
        background: pink;
        opacity:40%;
        border-radius: 2px;
    }
    *::-webkit-scrollbar-track {
        background: black;
    }
`