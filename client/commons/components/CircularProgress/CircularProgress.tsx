import * as React from 'react';
import { IProps } from './CircularProgressInterface';
import { StyledCircularProgress } from './CircularProgressStyles';
import { CircularProgressProps } from '@material-ui/core';

const CircularProgress: React.FC<IProps> = ({

}) => {

  return (
    <StyledCircularProgress/>
  )
} 

export default CircularProgress;