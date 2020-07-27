import * as React from 'react';
import { StyledKeyboardDatePicker } from './DatePickerStyles';
import { IKeyboardDatePickerProps } from './DatePickerInterface';

const DatePicker: React.FC<IKeyboardDatePickerProps> = ({
    ...others
}) => {

    return(
        <StyledKeyboardDatePicker
            {...others}
        />
    )
}

export default DatePicker;