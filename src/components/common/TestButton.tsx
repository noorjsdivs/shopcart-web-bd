"use client";
import { Button } from "../ui/button";

const TestButton = () => {
  const showMsg = () => {
    alert("Welcome to shopcart application");
  };

  return <Button onClick={showMsg}>click me</Button>;
};

export default TestButton;
