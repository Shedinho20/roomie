import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button, Container, Field, Spacer } from "../../component/Atoms";
import { Istate } from "../../store";
import "./login.scss";
import { useLogin } from "./useLogin";

export const LoginPage = () => {
  const { formData, onUpdateFormData, formError, onSubmitFormData } = useLogin();
  const { auth } = useSelector((state: Istate) => state);
  const { loading, login } = auth;

  return (
    <>
      <Container>
        <div className="loginPage">
          <form className="loginForm" autoComplete="off">
            <h1>Login</h1>
            <Spacer height={20} />
            <Field
              label="E-mail"
              type="text"
              name="email"
              value={formData.email}
              error={formError.email}
              onChange={onUpdateFormData}
              autoComplete="off"
              placeholder="abc@roomie.com"
            />
            <Spacer height={20} />
            <Field
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              error={formError.password}
              onChange={onUpdateFormData}
              autoComplete="off"
            />
            <Spacer height={30} />
            <Link to="/auth/resetpassword" state={{ email: formData.email }} className="forgotPasswordLink">
              <span>Forgot password?</span>
            </Link>
            <Spacer height={10} />
            <Button width="150px" bckColor="#2b67f6" onClick={onSubmitFormData} disabled={loading}>
              Login
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
