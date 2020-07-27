import * as React from 'react';
import { StyledGridItem } from './GridItemStyles';
import { IGridItemProps } from './GridItemInterface';

const GridItem: React.FC<IGridItemProps> = ({
    children,
    ...others
}) => {

    return (
        <StyledGridItem 
            item
            {...others}
        >
            {children}
        </StyledGridItem>
    )
}

export default GridItem;