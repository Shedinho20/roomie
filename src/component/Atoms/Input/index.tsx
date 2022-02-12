import React, { HTMLInputTypeAttribute, useEffect, useRef } from "react";
import "./input.scss";
type BaseInputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string | undefined;
  label?: string;
  padding?: string;
  border?: string;
  disabled?: boolean;
  backgroundColor?: string;
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
  padding = "1em 1.5em",
  border,
  disabled,
  backgroundColor,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled && border) {
      ref.current?.focus();
    }
  }, [disabled]);

  return (
    <div style={{ width: "100%" }}>
      <p className={`${error ? "error-message label" : "label"}`}>{label}</p>
      <input
        ref={ref}
        type={type}
        name={name}
        className={`${error ? "input error" : "input"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        style={{ padding, border, backgroundColor }}
        disabled={disabled}
      />
      {error && typeof error === "string" && <p className="error-message">{error}</p>}
    </div>
  );
};
