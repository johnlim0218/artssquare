import * as React from 'react';
import { createContext, useState, useMemo } from 'react';
import { IDataContext, IWhere } from '../interface/Data.interface';

export const DataContext = createContext<IDataContext>({} as IDataContext);

const Data:React.FC = ({
  children
}) => {
  const [where, setWhere] = useState<IWhere>({})

  const value = useMemo(() => ({
    states: {
      where,
    },
    actions: {
      setWhere
    }
  }), [where]);

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default Data;
