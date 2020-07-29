import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import DataFilterView from './views/DataFilterView';
import { ISelectedDate, IForm } from './interface/DataFilter.interface';

const DataFilterComponent = () => {
  const [selectedDate, setSelectedDate] = useState<ISelectedDate>(() => {
    const today = new Date();
    const fullYear = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return({
      from: fullYear + '-' + month + '-' + date as unknown as Date,
      to: fullYear + '-' + month + '-' + date as unknown as Date,
    })
  });
  const { control, handleSubmit, setValue } = useForm<IForm>({});

  const handleChangeFromDate = useCallback((date:any) => {
    setSelectedDate((prevState:ISelectedDate) => ({
      ...prevState,
      from: date,
    }));
    setValue('fromDate', date);
  }, [selectedDate]);

  const handleChangeToDate = useCallback((date:any) => {
    setSelectedDate((prevState:ISelectedDate) => ({
      ...prevState,
      to: date,
    }));
    setValue('toDate', date);
  }, [selectedDate]);

  const onSubmitFilterForm = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <DataFilterView
      handleSubmit={handleSubmit}
      onSubmitFilterForm={onSubmitFilterForm}
      control={control}
      selectedDate={selectedDate}
      handleChangeFromDate={handleChangeFromDate}
      handleChangeToDate={handleChangeToDate}
    />
  )
}

export default DataFilterComponent;