import React from "react";
import { Button, Container, Spacer, Spinner } from "../../component/Atoms";
import "./UserAccount.scss";
import { Avatar } from "@mui/material";
import defaultAvatar from "../../images/Avatar.svg";
import { useParams } from "react-router-dom";
import { AccountField } from "../../component/molecules";
import { useAccount } from "./useAccount";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

export const UserAccountPage = () => {
  const { changed, state, onUpdateFormData, loading, saveAccountInfo, accountInfo } = useAccount();
  return (
    <>
      {!loading && (state.email !== "" || state.username !== "") ? (
        <Container>
          <div className="UserAccount">
            <div className="profileDetails">
              <div className="userAccountHeader">
                <Avatar srcSet={defaultAvatar} className="avatar" />
                <div className="userHeaderInfo">
                  <h3>{accountInfo.username}</h3>
                  <p>{state.createdDate}</p>
                </div>
              </div>
              <Spacer height={40} />
              <AccountField
                title="Username"
                name="username"
                username={state.username}
                type="text"
                onUpdateFormData={onUpdateFormData}
              />
              <Spacer height={20} />
              <AccountField
                title="E-mail"
                name="email"
                username={state.email}
                type="text"
                onUpdateFormData={onUpdateFormData}
              />
              <Spacer height={20} />
              <AccountField
                name="password"
                title="Password"
                username="JaneDoe@gmail.com"
                type="password"
                onUpdateFormData={onUpdateFormData}
              />
              <Spacer height={40} />
              <div className="userAccountLink">
                <Button width="150px" bckColor="#2b67f6" border="#2b67f6" onClick={() => signOut(auth)}>
                  Sign Out
                </Button>
                <Spacer width={40} />
                {changed && (
                  <Button width="150px" bckColor="#2b67f6" border="#2b67f6" onClick={saveAccountInfo}>
                    Save
                  </Button>
                )}
              </div>
            </div>
            <div className="savedItems">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci temporibus suscipit natus est labore
              sunt, eum obcaecati ratione iusto sit!
            </div>
          </div>
        </Container>
      ) : (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      )}
    </>
  );
};
