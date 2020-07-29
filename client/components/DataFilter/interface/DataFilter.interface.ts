import { DateType } from '@date-io/type';
import { Control } from 'react-hook-form';

export interface ISelectedDate {
  from?: Date;
  to?: Date;
}

export interface IForm {

}

export interface IProps {
  handleSubmit: any;
  onSubmitFilterForm: (data:IForm) => void;
  control: Control<Record<string, any>>
  getValues: any;
  setValue: any;
  // selectedDate: ISelectedDate;
  // handleChangeFromDate: (date: Date|null, value?: string | null | undefined) => void;
  // handleChangeToDate: (date: Date|null, value?: string | null | undefined) => void;
}