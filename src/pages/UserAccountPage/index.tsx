import React from "react";
import { Button, Container, Spacer } from "../../component/Atoms";
import "./UserAccount.scss";
import { Avatar } from "@mui/material";
import defaultAvatar from "../../images/Avatar.svg";
import { useParams } from "react-router-dom";
import { AccountField } from "../../component/molecules";
import { useAccount } from "./useAccount";

export const UserAccountPage = () => {
  const { uid } = useParams();
  const { state } = useAccount();
  return (
    <Container>
      <div className="UserAccount">
        <div className="profileDetails">
          <div className="userAccountHeader">
            <Avatar srcSet={defaultAvatar} className="avatar" />
            <div className="userHeaderInfo">
              <h3>Jane Doe</h3>
              <p>25th Feb, 2020</p>
            </div>
          </div>
          <Spacer height={40} />
          <AccountField title="Username" username={state.username} type="text" />
          <Spacer height={20} />
          <AccountField title="E-mail" username={state.email} type="text" />
          <Spacer height={20} />
          <AccountField title="Password" username="JaneDoe@gmail.com" type="password" />
          <Spacer height={40} />
          <Button width="150px" bckColor="#2b67f6" border="#2b67f6" onClick={() => console.log("/auth/login")}>
            Sign Out
          </Button>
        </div>
        <div className="savedItems">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci temporibus suscipit natus est labore sunt,
          eum obcaecati ratione iusto sit!
        </div>
      </div>
    </Container>
  );
};
