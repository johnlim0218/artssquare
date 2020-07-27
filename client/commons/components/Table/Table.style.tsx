import styled from 'styled-components';
import Table from "@material-ui/core/Table";

export const TableWrapper = styled.div`

`

export const StyledTable = styled(Table)`
  th {
    font-weight: 600;
    // border-bottom: 3px solid #ddd
  }

  td {
    border-top: 1px solid #ddd;
    border-bottom: none !important;
  }
`