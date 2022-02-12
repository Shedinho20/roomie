import React, { useState } from "react";
import "./SocialAuth.scss";
import GoogleIcon from "../../../images/btn_google_light_normal_ios.svg";
import { actionCreators, Istate } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const SocialAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="SocialAuth">
      <button onClick={() => signInWithGoogle(setLoading)} disabled={loading}>
        <img src={GoogleIcon} />
      </button>
    </div>
  );
};
