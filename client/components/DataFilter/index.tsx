import * as React from 'react';
import { useEffect, useState, useCallback, useContext } from 'react';
import { DataContext } from '../../views/Data/context/Data.context';
import { useForm } from 'react-hook-form';
import DataFilterView from './views/DataFilterView';
import { ISelectedDate, IForm } from './interface/DataFilter.interface';

const DataFilterComponent = () => {
  const { actions: { setWhere } } = useContext(DataContext);

  const { control, handleSubmit, setValue, getValues } = useForm<IForm>({});

  const onSubmitFilterForm = useCallback((data) => {
    setWhere(data);
  }, []);

  return (
    <DataFilterView
      handleSubmit={handleSubmit}
      onSubmitFilterForm={onSubmitFilterForm}
      control={control}
      getValues={getValues}
      setValue={setValue}
      // selectedDate={selectedDate}
      // handleChangeFromDate={handleChangeFromDate}
      // handleChangeToDate={handleChangeToDate}
    />
  )
}

export default DataFilterComponent;