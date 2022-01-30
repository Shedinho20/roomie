import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Spacer } from "../../component/Atoms";
import { ReactComponent as NotFound } from "../../images/404.svg";
import "./notFoundPage.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="notFoundPage">
        <NotFound className="notFoundImg" />
        <Spacer height={20} />
        <h3>Oop! you seems lost</h3>
        <Spacer height={50} />
        <Button width="150px" bckColor="#2b67f6" onClick={() => navigate("/")}>
          Let's go home
        </Button>
      </div>
    </Container>
  );
};
