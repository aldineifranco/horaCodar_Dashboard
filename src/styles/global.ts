import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      props.theme.colors.background_300};
    color: ${(props) => props.theme.colors.white};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
  }

  a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;