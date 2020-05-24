import React from "react";
import { myContext } from "../../MyContext";
import { timeAgo } from "../../date";
import "./index.css";

class UserProfile extends React.Component {
  render() {
    const theme = this.context;
    const date = timeAgo(theme.post.lastActivity);
    return (
      <div className="profile">
        <div className="profile-side">
          <img
            className="profileimg"
            src={theme.post.from.profile.profilePhoto}
            alt="profile-img"
          />
          <div className="profile-right">
            <span className="profilename">
              {theme.post.from.metadata.displayName}
            </span>
            <p className="time">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.contextType = myContext;

export default UserProfile;
