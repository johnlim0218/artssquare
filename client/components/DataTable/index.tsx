import * as React from 'react';
import { useEffect } from 'react';
import DataTableView from './views/DataTableView';
import { useDataTableQuery } from './hooks/useDataTable.callback';


const DataTableComponent = () => {
  const { data, loading, refetch } = useDataTableQuery({
      fromDate: '2020-07-27T14:08:02.006Z',
      toDate: '2020-07-27T14:08:02.006Z'
    });

  // useEffect(() => {
  //   refetch();
  // }, []);

  return (
    <div>
      <DataTableView 
        data={data?.getShippingData && data.getShippingData}
        loading={loading}
      />
    </div>
  )
}

export default DataTableComponent;