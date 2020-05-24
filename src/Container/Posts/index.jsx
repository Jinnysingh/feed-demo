import React from "react";
import UserProfile from "../../Components/UserProfile/index";
import Feeds from "../../Components/Feeds/index";
import Comments from "../../Components/Comments/index";
import "../../styles.css";

export default function Post() {
  return (
    <div className="card">
      <UserProfile />
      <hr />
      <Feeds />
      <hr />
      <Comments />
    </div>
  );
}
