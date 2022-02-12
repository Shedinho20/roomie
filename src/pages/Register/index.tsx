import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Spacer, Field, Container, Button } from "../../component/Atoms";
import { SocialAuth } from "../../component/Compounds";
import { Istate } from "../../store";
import "./register.scss";
import { useRegister } from "./useRegister";

export const RegisterPage = () => {
  const { auth } = useSelector((state: Istate) => state);
  const { loading } = auth;
  const { isAgreed, onUpdateChecked, formData, onUpdateFormData, formError, onSubmitFormData } = useRegister();

  return (
    <>
      <Container>
        <div className="registerPage">
          <form className="registerForm" autoComplete="off">
            <h1>Sign Up</h1>
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
              placeholder="Password20@"
            />
            <Spacer height={20} />
            <Field
              label="Verify password"
              type="password"
              name="verifyPassword"
              value={formData.verifyPassword}
              error={formError.verifyPassword}
              onChange={onUpdateFormData}
              autoComplete="off"
              placeholder="Password20@"
            />
            <Spacer height={30} />
            <div className="registerCheckbox">
              <input type="checkbox" checked={isAgreed} onChange={onUpdateChecked} name="isAgreed" />
              <span>I agree to terms and conditions</span>
            </div>
            <Spacer height={10} />
            <Button width="150px" bckColor="#2b67f6" onClick={onSubmitFormData} disabled={loading}>
              Sign Up
            </Button>
            <Spacer height={10} />
            <p>
              Have an account?
              <Link to="/auth/login" className="forgotPasswordLink">
                <span> Sign In</span>
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
