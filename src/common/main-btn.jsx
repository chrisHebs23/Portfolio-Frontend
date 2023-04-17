import React from "react";
import { Button } from "react-bootstrap";

const MainBtn = ({ text, padding = "main-padding" }) => {
  return <Button className={"btn main-btn " + padding}>{text}</Button>;
};

export default MainBtn;
