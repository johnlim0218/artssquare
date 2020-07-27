import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  &.MuiButton-root{
    margin: 5px 2px 0px 2px;
  }

  &.MuiButton-sizeLarge{
    font-size: 0.8125 rem;
    height: 40px;
    padding: 15px 25px;
  }

  &.MuiButton-containedPrimary {
    background-color: #4680ff;
    color: #ffffff;
  }

  &.MuiButton-containedSecondary {
    
  }
`