import { useQuery } from "@apollo/react-hooks"
import { GET_SHIPPING_DATA } from '../queries/DataTable.query';
import { IDataTableCallback } from '../interface/DataTable.interface';
import { QueryOptions, OperationVariables } from "apollo-client";
import { useCallback } from "react";

export const useDataTableQuery = (
  where:any
) => {
  return useQuery(GET_SHIPPING_DATA, {
    variables: {
      ...where
    },
    notifyOnNetworkStatusChange: true,
  })
};