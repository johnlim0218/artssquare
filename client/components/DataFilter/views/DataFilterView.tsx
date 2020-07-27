import * as React from 'react';
import { IProps } from '../interface/DataFilter.interface';
import Paper from '../../../commons/components/Paper/Paper';
import Typography from '../../../commons/components/Typography/Typography';
import GridContainer from '../../../commons/components/GridContainer/GridContainer';
import GridItem from '../../../commons/components/GridItem/GridItem';
import DatePicker from '../../../commons/components/DatePicker/DatePicker';
import Button from '../../../commons/components/Button/Button';
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DataFilterView: React.FC<IProps> = ({
  selectedDate,
  handleChangeDate
}) => {
  console.log(selectedDate);
  return (
    <Paper elevation={2}>
      <Typography variant="h6">
        필터
      </Typography>
      <form>
        <GridContainer alignItems="center">
          <GridItem xs={2}>
            기간
          </GridItem>
          <GridItem xs={10}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="none"
                id="date-picker-inline"
                label="조회 시작일"
                type="DateFnsUtils"
                value={selectedDate}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <DatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="none"
                id="date-picker-dialog"
                label="조회 종료일"
                type="DateFnsUtils"
                value={selectedDate}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </GridItem>
        </GridContainer>

        <GridContainer 
          alignItems="center"
        >
          <GridItem xs={12}>
            <Button>
              가져오기
            </Button>
          </GridItem>
        </GridContainer>
      </form>
    </Paper>
    
  )
}

export default DataFilterView;