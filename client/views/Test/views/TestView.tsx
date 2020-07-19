import React from "react";

export interface ITestView {
  data: any;
}

export function TestView(props: ITestView) {
  return <div>{JSON.stringify(props.data)}</div>;
}