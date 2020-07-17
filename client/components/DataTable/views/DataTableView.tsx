import * as React from 'react';
import { useDataTableQuery } from '../hooks/useDataTable.query';

const DataTableView = () => {
  const { data } = useDataTableQuery();

  console.log(data);
  return(
    <>

    </>
  )
}

export default DataTableView;