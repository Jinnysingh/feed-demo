import React from "react";
import { myContext } from "../../MyContext";
import Icon from "../../Components/Icon";
import "./index.css";

class Comments extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div className="comment">
        <div style={{ display: "flex" }}>
          {theme.reactions.userEmotions.map(item => {
            return item === "LIKE" ? (
              <div className="item emoticon">
                <Icon icon={item} />
                <span className="time">Like</span>
              </div>
            ) : (
              <div className="item emoticon">
                <Icon icon={item} />
                <span className="time">Comment</span>
              </div>
            );
          })}
        </div>
        <div className="footer-section">
          <img
            className="profileimg"
            src={theme.post.from.profile.profilePhoto}
            alt="profileimg"
          />
          <input placeholder="Add comment" />
          <button>Add</button>
        </div>
      </div>
    );
  }
}

Comments.contextType = myContext;

export default Comments;
