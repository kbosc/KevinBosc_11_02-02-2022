import colors from './colors'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body, nav, header, footer, div, span,
    h1, h2, h3, p,
    a, img,
    ul, li,
    table, form, label, input, textarea, select, button {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: inherit;
    font-size: 100%;
    }
    ul {
    list-style: none;
    }
    li {
    list-style: none;
    }
    input, textarea, select, button {
    display: block;
    box-sizing: border-box;
    border-radius: 0;
    outline: none;
    border: none;
    background: none;
    color: inherit;
    }
    input:focus,
    textarea:focus,
    button:focus {
    outline: none;
    }
    input[type='submit']:hover,
    button:hover {
    cursor: pointer;
    }
    input::-ms-clear {
    display: none; /*─ IE11 → remove cross to close ─*/
    }
    textarea {
    overflow: auto; /*─ Hide scroll bar on IE ─*/
    }
    a {
    color: inherit;
    // color: ${colors.primary};
    text-decoration: none;
    }
    img, video, svg, picture {
    display: block;
    }
    img, video {
    width: 100%;
    height: auto;
    }
    svg {
    width: 100%;
    height: 100%;
    }
    iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
    body {
        font-size: 16px;
        background: #FDFDFD;
        font-family: Montserrat, serif;
    
    }
    
    h1, h2, h3, h4 {
        font-family: Montserrat, sans-serif;
    }
`
export default StyledGlobalStyle

