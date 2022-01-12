import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../../store/types";
import "./Search.scss";
interface Props {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Search: React.FC<Props> = ({ type, placeholder, name, handleChange }) => {
  const dispatch = useDispatch();
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const handleFocus = () => {
    dispatch({ type: ActionTypes.SEARCHFOCUS });
  };
  return (
    <div className="search">
      <input type={type} placeholder={placeholder} name={name} onChange={onhandleChange} onFocus={handleFocus} />
    </div>
  );
};
