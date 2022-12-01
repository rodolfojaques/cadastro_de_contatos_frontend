import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        
    }

    body{
        background-color: #040408;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Montserrat', sans-serif;
        color: antiquewhite;
    }
`;