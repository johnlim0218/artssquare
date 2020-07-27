import * as React from 'react';
import DataFilter from '../../components/DataFilter';
import DataTable from '../../components/DataTable';
import { WrapperDiv } from './views/DataStyles';

const DataView = () => {

  return (
    <WrapperDiv>
      <DataFilter/>
      <DataTable/>
    </WrapperDiv>
  )
}

export default DataView;