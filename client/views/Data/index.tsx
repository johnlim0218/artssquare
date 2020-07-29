import * as React from 'react';
import DataContextProvider from './context/Data.context';
import DataFilter from '../../components/DataFilter';
import DataTable from '../../components/DataTable';

const DataView = () => {
  
  return (
    <DataContextProvider>
      <DataFilter/>
      <DataTable/>
    </DataContextProvider>
  )
}

export default DataView;