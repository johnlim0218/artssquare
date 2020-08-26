import * as React from 'react';
import { useEffect } from 'react';
import App, { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withApollo } from '../client/lib/apollo/apollo';
import Layout from '../client/views/Layout';
import theme from '../client/lib/theme';
import PageLoading from '../client/commons/components/PageLoading';

interface Props extends AppProps {

}

const ArtsSquare = (props: Props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Helmet 
        title="ArtsSquare's Scrapper" 
        htmlAttributes={{ lang: 'ko '}}
        meta={[{
          charSet: 'UTF-8'
        }]}
        link={[{
          rel: 'stylesheet', 
          href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
        }]}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageLoading />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    </>
  )
}


export default withApollo({ssr: true})(ArtsSquare);