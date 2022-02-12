import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button, Container, Field, Spacer } from "../../component/Atoms";
import { SocialAuth } from "../../component/Compounds";
import { Istate } from "../../store";
import "./login.scss";
import { useLogin } from "./useLogin";

export const LoginPage = () => {
  const { formData, onUpdateFormData, formError, onSubmitFormData } = useLogin();
  const { auth } = useSelector((state: Istate) => state);
  const { loading } = auth;

  return (
    <>
      <Container>
        <div className="loginPage">
          <form className="loginForm" autoComplete="off">
            <h1>Login</h1>
            <Spacer height={20} />
            <Field
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              error={formError.username}
              onChange={onUpdateFormData}
              autoComplete="off"
              placeholder="Shedinho20"
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
            <Link to="/auth/resetpassword" state={{ email: formData.username }} className="forgotPasswordLink">
              <span>Forgot password?</span>
            </Link>
            <Spacer height={10} />
            <Button width="150px" bckColor="#2b67f6" onClick={onSubmitFormData} disabled={loading}>
              Login
            </Button>
            <Spacer height={10} />
            <p>
              Haven't registered?
              <Link to="/auth/register" className="forgotPasswordLink">
                <span> Sign Up now</span>
              </Link>
            </p>
            <Spacer height={30} />
            <SocialAuth />
          </form>
        </div>
      </Container>
    </>
  );
};
