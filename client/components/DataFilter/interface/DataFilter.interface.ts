import { DateType } from '@date-io/type';

export interface IProps {
  selectedDate: Date;
  handleChangeDate: (date: Date|null, value?: string | null | undefined) => void;
  
}