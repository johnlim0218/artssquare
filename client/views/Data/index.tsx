import * as React from 'react';
import DataContextProvider from './context/Data.context';
import DataFilter from '../../components/DataFilter';
import DataTable from '../../components/DataTable';
import { WrapperDiv } from './views/DataStyles';

const DataView = () => {
  
  return (
    <DataContextProvider>
      <WrapperDiv>
        <DataFilter/>
        <DataTable/>
      </WrapperDiv>
    </DataContextProvider>
  )
}

export default DataView;