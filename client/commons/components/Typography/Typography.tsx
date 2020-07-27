import * as React from 'react';
import { IProps } from './Typography.interface';
import { StyledTypography } from './Typography.style';

const Typography: React.FC<IProps> = ({
  children,
  ...props
}) => {

  return (
    <StyledTypography
      {...props}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography;