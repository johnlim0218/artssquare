import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import DataFilterView from './views/DataFilterView';

const DataFilterComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date()
  );
  const { control, handleSubmit } = useForm();

  const handleChangeDate = useCallback((date) => {
    setSelectedDate(date);
  }, [selectedDate]);

  return (
    <DataFilterView
      selectedDate={selectedDate}
      handleChangeDate={handleChangeDate}
    />
  )
}

export default DataFilterComponent;