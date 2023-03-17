import { css } from 'styled-components';

const Reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    //font-family: 'Roboto', 'Spoqa Han Sans Neo', -apple-systemsystem, BlinkMacSystemFont, Apple SD Gothic Neo, sans-serif;
    font-family: 'gothicBook', 'Noto Sans KR', -apple-system, BlinkMacSystemFont,
      Apple SD Gothic Neo, sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
    word-break: keep-all;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.4);
  }

  body {
    -webkit-text-size-adjust: none;
  }

  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    text-decoration: none;
  }

  b {
    font-weight: bold;
  }

  input[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  input {
    outline: none;
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  input,
  textarea,
  select {
    font-size: 16px !important;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    width: 100%;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  ::placeholder {
    color: #aaaaaa;
    font-size: 15px;
  }
`;

export default Reset;
