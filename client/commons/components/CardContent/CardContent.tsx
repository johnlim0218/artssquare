import * as React from 'react';
import { IProps } from './CardContent.interface';
import { StyledCardContent } from './CardContent.style';

const CardContent: React.FC<IProps> = ({
  children,
  ...props
}) => {

  return (
    <StyledCardContent
      {...props}
    >
      {children}
    </StyledCardContent>
  )
}

export default CardContent;