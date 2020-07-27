import * as React from 'react';
import { IProps } from './Card.interface';
import { StyledCard } from './Card.style';

const Card: React.FC<IProps> = ({
  children
}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card;