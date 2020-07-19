import { useQuery } from "@apollo/react-hooks"
import { GET_SHIPPING_DATA } from '../queries/DataTable.query';

export const useDataTableQuery = () => {
  return useQuery(GET_SHIPPING_DATA, {
    variables: {
      fromDate: '',
      toDate: '',
    }
  })
  
};