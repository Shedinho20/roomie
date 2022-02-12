import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import { validateFormSubmit, validators } from "../../services/validator";
import { actionCreators, Istate } from "../../store";

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Register } = bindActionCreators(actionCreators, dispatch);

  const [formData, setformData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    username: "",
  });

  const [formError, setformError] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    username: "",
  });

  const [isAgreed, setisAgreed] = useState(false);

  const onUpdateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const error = validators[name](value, formData);
    setformData((formData) => ({ ...formData, [name]: value }));
    setformError((formError) => ({ ...formError, [name]: error }));
  };

  const onUpdateChecked = () => {
    setisAgreed((isAgreed) => !isAgreed);
  };
  const onSubmitFormData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { errors, isValid } = validateFormSubmit(formData);
    setformError(errors);
    if (!isValid) {
      return;
    }
    if (!isAgreed) {
      toast.error("Agree to terms and conditions");
      return;
    }
    Register(formData);
  };

  return { isAgreed, onUpdateChecked, formData, onUpdateFormData, formError, onSubmitFormData };
};
