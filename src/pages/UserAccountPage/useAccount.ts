import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { db } from "../../services/firebase";
import { actionCreators, Istate } from "../../store";
import { ActionTypes } from "../../store/types";

export const useAccount = () => {
  const [state, setstate] = useState<Record<string, string>>({
    username: "",
    email: "",
    createdDate: "",
  });

  const [changed, setchanged] = useState(false);

  const dispatch = useDispatch();
  const { setUserAccountInfo } = bindActionCreators(actionCreators, dispatch);
  const { account } = useSelector((state: Istate) => state);
  const { accountInfo, loading } = account;

  const onUpdateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setchanged(checkChanged());
    setstate((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const saveAccountInfo = async () => {
    const { email, username, id } = accountInfo;

    const accountOnFirestore: Record<string, string> = { email, username };

    setchanged(checkChanged());
    if (changed) {
      try {
        dispatch({ type: ActionTypes.SAVINGACCT });
        await updateDoc(doc(db, `users/${id}`), {
          email: state.email,
          username: state.username,
        });
        setUserAccountInfo();
      } catch (error) {}
    }
  };

  const checkChanged = () => {
    const { email, username } = accountInfo;

    const accountOnFirestore: Record<string, string> = { email, username };
    for (let key in accountOnFirestore) {
      if (accountOnFirestore[key] !== state[key]) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (loading) {
      dispatch(setUserAccountInfo);
    }
    if (Object.keys(accountInfo).length !== 0) {
      const { email, username, created } = accountInfo;
      const createdDate = moment(created.toDate()).format("MMM Do YYYY");
      setstate((state) => ({ ...state, email, username, createdDate }));
    }
  }, [loading]);

  return { changed, saveAccountInfo, state, onUpdateFormData, accountInfo, loading };
};
