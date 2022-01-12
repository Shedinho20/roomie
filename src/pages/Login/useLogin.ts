import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { validateFormSubmit, validators } from "../../services/validator";
import { actionCreators, Istate } from "../../store";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Login } = bindActionCreators(actionCreators, dispatch);
  const { auth } = useSelector((state: Istate) => state);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [formError, setformError] = useState({
    email: "",
    password: "",
  });

  const onUpdateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const error = validators[name](value, formData, "dd");
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
  useEffect(() => {
    if (auth.login) {
      navigate("/");
    }
  }, [auth.login]);
  return { formData, onUpdateFormData, formError, onSubmitFormData };
};
