import * as React from 'react';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../views/Data/context/Data.context';
import DataTableView from './views/DataTableView';
import { useDataTableQuery } from './hooks/useDataTable.callback';


const DataTableComponent = () => {
  const { states: { where } } = useContext(DataContext);
  const { data, loading, refetch } = useDataTableQuery({
    where
  });
  
  // useEffect(() => {
  //   refetch();
  // }, []);

  return (
    <DataTableView 
      data={data?.getShippingData && data.getShippingData}
      loading={loading}
    />
  )
}

export default DataTableComponent;