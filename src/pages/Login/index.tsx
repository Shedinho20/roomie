import React from "react";
import { Button, Container, Field, Spacer } from "../../component/Atoms";
import "./login.scss";

export const LoginPage = () => {
  return (
    <Container>
      <Spacer height="15rem" />
      <div className="loginPage">
        <form className="loginForm">
          <Field
            label="E-mail"
            type="text"
            name="verificationCode"
            value={"email"}
            error=""
            onChange={() => {
              console.log("dd");
            }}
            autoComplete="off"
          />
          <Spacer height={20} />
          <Field
            label="password"
            type="password"
            name="verificationCode"
            value={"email"}
            error=""
            onChange={() => {
              console.log("dd");
            }}
            autoComplete="off"
          />
          <Spacer height={30} />
          <span>Forgot password?</span>
          <Spacer height={10} />
          <Button width="150px" bckColor="#2b67f6">
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

// type={type}
// name={name}
// style={{ paddingRight }}
// placeholder={placeholder}
// value={value}
// onChange={onChange}
// disabled={disabled}
// autoComplete={autoComplete}
