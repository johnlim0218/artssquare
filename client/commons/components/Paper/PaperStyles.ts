import styled from 'styled-components';
import { 
    Paper 
} from '@material-ui/core';
import { IStyle } from './PaperInterface';

export const StyledPaper = styled(Paper)`
    &.MuiPaper-root{
        padding: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
`