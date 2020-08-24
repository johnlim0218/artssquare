import * as React from 'react';
import { useEffect, useState } from 'react';
import Router from 'next/router';

export const usePageLoadingState = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const routeChangeStart = (url:string) => {
      console.log(url);
      setLoading(true);
    };

    const routeChangeEnd = (url:string) => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeEnd", routeChangeEnd);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeComplete", routeChangeEnd);
      Router.events.off("routeChangeEnd", routeChangeEnd);
    }
  }, []);

  return [loading, setLoading];
}