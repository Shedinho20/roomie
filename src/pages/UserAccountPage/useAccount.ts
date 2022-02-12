import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";

export const useAccount = () => {
  const [state, setstate] = useState({
    username: "Jane",
    email: "Jane@gmail.com",
  });

  const dispatch = useDispatch();
  const { setUserAccountInfo } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setUserAccountInfo();
  }, []);
  return { state };
};
