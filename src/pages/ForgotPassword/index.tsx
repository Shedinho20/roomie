import React from "react";
import { Button, Container, Field, Spacer } from "../../component/Atoms";
import { useForgotPassword } from "./useForgotPassword";
import "./Forgotpassword.scss";

export const ForgotPassword = () => {
  const { formData, loading, formError, onUpdateFormData, onSubmitFormData } = useForgotPassword();
  return (
    <Container>
      <div className="forgotPassword">
        <form className="form">
          <h1>Forgot Password?</h1>
          <Spacer height={10} />
          <p>No worries, we'll send a reset link</p>
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
          <Button width="150px" bckColor="#2b67f6" onClick={onSubmitFormData} disabled={loading}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};