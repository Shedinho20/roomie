import React, { ChangeEvent } from "react";
import "./Search.scss";
interface Props {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Search: React.FC<Props> = ({ type, placeholder, name, handleChange }) => {
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="search">
      <input type={type} placeholder={placeholder} name={name} onChange={onhandleChange} />
    </div>
  );
};
