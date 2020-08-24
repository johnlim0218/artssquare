import * as React from 'react';

import { usePageLoadingState } from './hooks/usePageLoading.state';
import PageLoadingView from './views/PageLoadingView';

const PageLoading = () => {
  const [loading] = usePageLoadingState();
  
  if(loading) {
    return <PageLoadingView />;
  } else {
    return null;
  }
} 

export default PageLoading;