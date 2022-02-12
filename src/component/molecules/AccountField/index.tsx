import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useForgotPassword } from "../../../pages/ForgotPassword/useForgotPassword";
import { Istate } from "../../../store";
import { Field } from "../../Atoms";
import "./AccounntField.scss";

interface AccountFieldProps {
  title: string;
  username: string;
  type: string;
  name: string;
  onUpdateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AccountField: React.FC<AccountFieldProps> = ({ name, title, username, type, onUpdateFormData }) => {
  const [disabled, setdisabled] = useState(true);
  const { sendPasswordReset } = useForgotPassword();
  const { account } = useSelector((state: Istate) => state);

  const sendResetLink = () => {
    console.log(account.accountInfo.email);
    sendPasswordReset(account.accountInfo.email);
  };
  return (
    <div className="accountField">
      <div className="accountFieldDetails">
        <h3>{title}</h3>
        <Field
          type={type}
          name={name}
          value={username ? username : ""}
          onChange={onUpdateFormData}
          autoComplete="off"
          padding="1em 0"
          border={"none"}
          disabled={disabled}
          backgroundColor="transparent"
        />
      </div>
      {disabled && type !== "password" && name !== "email" && (
        <p className="accountFieldEdit" onClick={() => setdisabled(false)}>
          edit
        </p>
      )}
      {disabled && type == "password" && (
        <p className="accountFieldEdit" onClick={sendResetLink}>
          send link
        </p>
      )}
    </div>
  );
};
