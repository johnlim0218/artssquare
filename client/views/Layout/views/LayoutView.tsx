import * as React from 'react';
import { WrapperDiv } from './LayoutStyles';

const LayoutView: React.FC = ({
  children
}) => {

  return(
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}

export default LayoutView;