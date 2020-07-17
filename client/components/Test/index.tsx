import * as React from "react";
import { useTestQuery } from "./hooks/useTest.query";
import { TestView } from "./views/TestView";

const TestComponent = () => {
  const { loading, error, data } = useTestQuery();

  return <TestView data={data} />;
};

export default TestComponent