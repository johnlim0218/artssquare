import * as React from 'react';
import { useEffect } from 'react';
import DataTableView from './views/DataTableView';
import { useDataTableQuery } from './hooks/useDataTable.query';


const DataTableComponent = () => {
  const { data, loading, refetch } = useDataTableQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {!loading ? 
        <DataTableView 
          data={data.getShippingData}
          loading={loading}
        />
        :
        <div>불러오는중</div>
      }
    </>
  )
}

export default DataTableComponent;