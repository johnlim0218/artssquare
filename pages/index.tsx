import * as React from 'react';
import { useEffect } from 'react';
import Router from 'next/router';

const Main = () => {

  useEffect(() => {
    Router.push('/data');
  }, []);

  return (
    <div>
      123
    </div>
  )
}

export default Main;
