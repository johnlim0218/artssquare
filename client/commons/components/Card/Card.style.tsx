import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  &.MuiCard-root{
    min-width: 1500px;
    padding: 20px 30px;
    // ::-webkit-scrollbar {
    //   width: 6px;
    // }
    // ::-webkit-scrollbar-thumb {
    //   background-color: #d8d8d8;
    //   border-radius: 2.8px;
    // }
    // ::-webkit-scrollbar-track {
    //   background-color: white;
    //   border-radius: 10px;
    //   box-shadow: inset 0px 0px 5px white;
    // }
  }
`