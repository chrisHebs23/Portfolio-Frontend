import React from "react";
import { Button } from "react-bootstrap";

const MainBtn = ({ text }) => {
  return <Button className="btn main-btn me-3">{text}</Button>;
};

export default MainBtn;
