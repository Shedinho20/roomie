import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { validateFormSubmit, validators } from "../../services/validator";
import { actionCreators, Istate } from "../../store";

export const useLogin = () => {
  const dispatch = useDispatch();

  const { Login } = bindActionCreators(actionCreators, dispatch);

  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const [formError, setformError] = useState({
    username: "",
    password: "",
  });

  const onUpdateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const error = validators[name](value, formData);
    setformData((formData) => ({ ...formData, [name]: value }));
    setformError((formError) => ({ ...formError, [name]: error }));
  };

  const onSubmitFormData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { errors, isValid } = validateFormSubmit(formData);
    setformError(errors);
    if (!isValid) {
      return;
    }

    Login(formData);
  };

  return { formData, onUpdateFormData, formError, onSubmitFormData };
};
