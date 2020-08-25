import * as React from 'react';
import { 
  Toolbar, 
  AppBar, 
} from '@material-ui/core';
import Typography from '../../../commons/components/Typography/Typography';
import { RootDiv, ContentDiv } from './LayoutStyles';

const LayoutView: React.FC = ({
  children
}) => {

  return(
    <RootDiv>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">아트스퀘어를 위한 자동화도구</Typography>
        </Toolbar>
      </AppBar>
      <ContentDiv>
        {children}
      </ContentDiv>
    </RootDiv>
  )
}

export default LayoutView;