import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Open+Sans:ital,wght@1,300&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    body {
        overflow-x: hidden;
        background-color: #111;
        color: white;
    }

    ::-webkit-scrollbar {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 30px;
        background-color: #333;
    }

`;
