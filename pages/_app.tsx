import * as React from 'react';
import App, { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';
import { withApollo } from '../client/lib/apollo/apollo';

interface Props extends AppProps {

}

const ArtsSquare = (props: Props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Helmet 
        title="ArtsSquare's Scrapper"
        htmlAttributes={{ lang: 'ko '}}
        meta={[{
          charSet: 'UTF-8'
        }]}
      />
      <Component {...pageProps}/>
    </>
  )
}


export default withApollo({ssr: true})(ArtsSquare);