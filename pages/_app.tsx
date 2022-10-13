import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { store } from 'state/store';
import 'fonts.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'state/store';
import { injectStore } from 'services/http';
injectStore(store);

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
  text-decoration: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
const theme = {
  colors: {
    primaryColor: '#FC5842',
    secondaryColor: '#D1311C',
    green: '#05c168',
    red400: '#dc2b2b',
    red300: '#ff5a65',
    orange: '#ff9e2c',
  },
  typography: {
    title54: `
      font-size: 54px;
      font-weight: 700;
      line-height: 64px;
    `,
    title44: `
      font-size: 44px;
      line-height: 54px;
      font-weight: 700;
    `,
    title44Center: `
    font-size: 44px;
    line-height: 54px;
    font-weight: 700;
    text-align: center;
    `,
    title28: `
      font-size: 28px;
      font-weight: 700;
      line-height: 40px;
    `,
    title22: `
      font-size: 22px;
      font-weight: 700;
    `,
    title18: `
      font-weight: 700;
      font-size: 18px;
    `,
    textMedium18: `
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    align-items: center;
  `,
    textMedium18Center: `
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
    `,
    textMedium14: `
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
    `,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
