import React, { useRef, useState } from "react";
import { Field } from "../../Atoms";
import "./AccounntField.scss";

interface AccountFieldProps {
  title: string;
  username: string;
  type: string;
}

export const AccountField: React.FC<AccountFieldProps> = ({ title, username, type }) => {
  const [disabled, setdisabled] = useState(true);

  return (
    <div className="accountField">
      <div className="accountFieldDetails">
        <h3>{title}</h3>
        <Field
          type={type}
          name="username"
          value={username}
          onChange={() => console.log(username)}
          autoComplete="off"
          padding="1em 0"
          border={"none"}
          disabled={disabled}
          backgroundColor="transparent"
        />
      </div>
      {disabled && (
        <p className="accountFieldEdit" onClick={() => setdisabled(false)}>
          edit
        </p>
      )}
    </div>
  );
};
