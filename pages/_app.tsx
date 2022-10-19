import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { wrapper } from 'state/store';
import 'fonts.css';

import { Header, Footer } from 'components';

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

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container>
          <Header />
          <Component {...props.pageProps} />
          <Footer />
        </Container>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;

const Container = styled.div`
  margin: 0 6%;
  @media (max-width: 576px) {
    margin: 0 4%;
  }
`;
