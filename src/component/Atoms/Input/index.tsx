import React, { HTMLInputTypeAttribute } from "react";
import "./input.scss";
type BaseInputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  error: string | undefined;
  label: string;
};

export const Field: React.FC<BaseInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  error,
  label,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <p className={`${error ? "error-message label" : "label"}`}>{label}</p>
      <input
        type={type}
        name={name}
        className={`${error ? "input error" : "input"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {error && typeof error === "string" && <p className="error-message">{error}</p>}
    </div>
  );
};
