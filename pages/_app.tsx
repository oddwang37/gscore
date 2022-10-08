import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { store } from 'state/store';
import 'fonts.css';

const GlobalStyles = createGlobalStyle`
html {
  font-family: 'THICCCBOI';
  background-color: #000;
  color: #fff;
}
body {
  font-family: 'THICCCBOI';
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} /> <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
