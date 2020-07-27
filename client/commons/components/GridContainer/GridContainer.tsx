import * as React from 'react';
import { StyledGridContainer } from './GridContainerStyles';
import { IGridContainerProps } from './GridContainerInterface';

const GridContainer: React.FC<IGridContainerProps> = ({
    children,
    ...others
}) => {

    return (
        <StyledGridContainer
            container
            {...others}
        >
            {children}
        </StyledGridContainer>
    )
}

export default GridContainer;