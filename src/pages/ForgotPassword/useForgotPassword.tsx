import { sendPasswordResetEmail } from "firebase/auth";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import { auth } from "../../services/firebase";
import { validateFormSubmit, validators } from "../../services/validator";
import { actionCreators } from "../../store";

export const useForgotPassword = () => {
  const [formData, setformData] = useState({
    email: "",
  });
  const [formError, setformError] = useState({
    email: "",
  });
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { Login } = bindActionCreators(actionCreators, dispatch);

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
    if (!isValid) {
      return;
    }

    setloading(true);
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        toast.success("Check you email");
        navigate("/auth/login");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        } else {
          toast.error("Something went wrong");
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (location.state) {
      const email = location.state.email;
      setformData((formData) => ({ ...formData, email }));
      const error = validators["email"](email);
      if (error) {
        setformError((formError) => ({ ...formError, email: error }));
      }
    }
  }, []);

  return { formData, loading, formError, onUpdateFormData, onSubmitFormData };
};
