import * as React from 'react';
import { LinearProgress } from '@material-ui/core';
import { StyledAppBar } from './PageLoadingStyles';

const PageLoadingView = () => {

  return (
    <StyledAppBar
      position="fixed"
      color="transparent"
      elevation={0}
    >
      <LinearProgress color="secondary"/>
    </StyledAppBar>
  )
}

export default PageLoadingView;
