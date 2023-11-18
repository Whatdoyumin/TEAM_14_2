import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
  /* Elevation */
  --color-primary: #2E90FA;
  --color-secondary: #B2DDFF;
  --color-tertiary: #F2F4F7;
  --color-black: #344054;

  /* Shadow */
  --color-shadow: #F5FAFF;

  /* Blue */
  --color-blue-25: #F5FAFF;
  --color-blue-50: #EFF8FF;
  --color-blue-100: #D1E9FF;
  --color-blue-200: #B2DDFF;
  --color-blue-300: #84CAFF;
  --color-blue-400: #53B1FD;
  --color-blue-500: #2E90FA;
  --color-blue-600: #1570EF;
  --color-blue-700: #175CD3;
  --color-blue-800: #1849A9;
  --color-blue-900: #194185;

  /* Grey */
  --color-grey-25: #FCFCFD;
  --color-grey-50: #F9FAFB;
  --color-grey-100: #F2F4F7;
  --color-grey-200: #E4E7EC;
  --color-grey-300: #D0D5DD;
  --color-grey-400: #98A2B3;
  --color-grey-500: #667085;
  --color-grey-600: #475467;
  --color-grey-700: #344054;
  --color-grey-800: #1D2939;
  --color-grey-900: #101828;

  /* font */
  --font-size-display1: 28px;
  --font-size-display2: 20px;
  --font-size-display3: 18px;
  --font-size-display4: 16px;
  --font-size-head: 18px;
  --font-size-subhead: 16px;
  --font-size-body: 14px;
  --font-size-body2: 11px;
  --font-size-caption: 10px;

  /* size */
  --size-max-width: 390px;
  --size-header: 44px;
  --size-navBar: 96px;
  --size-side-gap: 20px;
  --size-bottom-gap: 64px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    width: min(100%, var(--size-max-width));
    background-color: #efefef;
    margin: auto;
    overflow-y: scroll;
    font-family: "SUIT", sans-serif;
    font-weight: 400;

    #root {
      background-color: var(--color-grey-50);
      height: 100vh;
      padding: calc(var(--size-header) + 1.5rem) var(--size-side-gap) calc(var(--size-navBar) + 1.5rem);
      position: relative;
    }
  }

  h1,
  h2,
  h3,
  p,
  input,
  button,
  fieldset,
  input,
  textarea {
    margin: 0;
    padding: 0; 
  }

  ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    border: 0;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
