import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
    left: 20px;
    margin-right: 10px !important;
    &.MuiFormControl-root{
        vertical-align: bottom;
    }

    .MuiInputBase-root {
        margin-top: 10px;
    }
`;
