import * as React from 'react';
import { IProps } from './CardHeader.interface';
import { StyledCardHeader } from './CardHeader.style';

const CardHeader: React.FC<IProps> = ({
  children,
  ...props
}) => {

  return (
    <CardHeader
      {...props}
    >
      {children}
    </CardHeader>
  )
}

export default CardHeader;