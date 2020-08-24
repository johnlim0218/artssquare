import * as React from 'react';
import LayoutView from './views/LayoutView';

const Layout:React.FC = ({
  children
}) => {

  return(
    <LayoutView
      children={children}
    />
  )
}

export default Layout;