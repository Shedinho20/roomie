import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spacer, Field, Container, Button } from "../../component/Atoms";
import { Istate } from "../../store";
import "./register.scss";
import { useRegister } from "./useRegister";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: Istate) => state);
  const { loading, login } = auth;
  const { isAgreed, onUpdateChecked, formData, onUpdateFormData, formError, onSubmitFormData } = useRegister();

  return (
    <>
      {login ? (
        navigate("/")
      ) : (
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
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                error={formError.password}
                onChange={onUpdateFormData}
                autoComplete="off"
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
            </form>
          </div>
        </Container>
      )}
    </>
  );
};
