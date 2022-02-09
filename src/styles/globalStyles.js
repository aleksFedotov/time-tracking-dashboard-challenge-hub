import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {

  /* Primary */

--blue: hsl(246, 80%, 60%);
  
--Work: hsl(15, 100%, 70%);
--Play: hsl(195, 74%, 62%);
--Study: hsl(348, 100%, 68%);
--Exercise: hsl(145, 58%, 55%);
--Social: hsl(264, 64%, 52%);
--SelfCare: hsl(43, 84%, 65%);

/* Secondary */

--very-dark-blue: hsl(226, 43%, 10%);
--dark-blue: hsl(235, 46%, 20%);
--desaturated-blue: hsl(235, 45%, 61%);
--pale-blue: hsl(236, 100%, 87%);

}


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.8rem;
  font-family:  'Rubik',sans-serif;
    background-color: var(--very-dark-blue);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
`;

export default GlobalStyle;
