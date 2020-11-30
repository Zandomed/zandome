import { css, createGlobalStyle } from 'styled-components';
import { FontFamily } from './font-family';

const size = {
   mobileS: '320px',
   mobileM: '375px',
   mobileL: '425px',
   tablet: '768px',
   laptop: '1024px',
   laptopL: '1440px',
   desktop: '2560px',
};

export const device = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktop})`,
};

export const GlobalStyles = createGlobalStyle`

  // Import FontFace 
  ${FontFamily}

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em "Poppins", georgia, serif, sans-serif;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #212121;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    font-family: "Poppins", georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background-color: #212121;
  }

  main{
    padding-top: 3.5rem;
  }
`;
