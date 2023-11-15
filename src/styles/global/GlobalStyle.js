import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFFFFF;
        --superLightGray: #FAFAFA;
        --lightGray: #757575;
        --mediumGray: #353535;
        --darkGray: #212121;
        --fontBig: 1.25rem;
        --fontMedium: 1.1rem;
        --fontSmall: 0.875rem;
        --line-heightTall: 1.5rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        font-family: "Roboto";
        h1{
            font-size: var(--fontBig);
            font-weight: 700;
            line-height: var(--line-heightTall);
            color: var(--white);
        }

        p{
            font-size: var(--fontSmall);
            font-weight: 500;
            line-height: var(--line-heightTall);
        }
    }
`;
