import * as React from 'react';
import { StyledPaper } from './PaperStyles';
import { IPaperProps } from './PaperInterface';

const Paper: React.FC<IPaperProps> = ({
    children,
    ...others
}) => {
    
    return (
        <StyledPaper
            {...others}
        >
            {children}
        </StyledPaper>
    )
};

export default Paper;

