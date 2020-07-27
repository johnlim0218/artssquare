import * as React from 'react';
import { IButtonProps } from './ButtonInterface';
import { StyledButton } from './ButtonStyles';

const Button: React.FC<IButtonProps> = ({
    ...others
}) => {
    
    return (
        <StyledButton
            {...others}
        />
    )
}

export default Button;