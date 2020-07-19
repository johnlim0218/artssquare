import * as React from 'react';
import MuiTable from "@material-ui/core/Table";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";

import { IProps } from './Table.interface';
import { TableWrapper } from './Table.style';

const Table: React.FC<IProps> = ({
  headData,
  bodyData
}) => {

  return(
    <div>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            {headData?.map((rowValue: any) => (
              <MuiTableCell key={rowValue}>
                {rowValue}
              </MuiTableCell>
            ))}
          </MuiTableRow>
        </MuiTableHead>

        <MuiTableBody>
          {bodyData?.map((rowValue: any) => (
            <MuiTableRow key={rowValue[0]}>
              {rowValue.map((cellValue: any) => (
                <MuiTableCell key={cellValue}>
                  {cellValue}      
                </MuiTableCell>
              ))}
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </div>
  )
}

export default Table;