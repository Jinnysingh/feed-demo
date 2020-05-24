import React from "react";
import { myContext } from "../../MyContext";
import "./index.css";

class Feeds extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div className="Feeds">
        <div className="feed">{theme.post.text}</div>
        <div style={{ display: "flex" }}>
          <div className="time emoticon">
            {theme.reactions.overallReaction.emotion.LIKE}
            <span className="actions">Likes</span>
          </div>
          <span className="time emoticon">
            {theme.reactions.overallReaction.COMMENT}
            <span className="actions">Comments</span>
          </span>
        </div>
      </div>
    );
  }
}

Feeds.contextType = myContext;

export default Feeds;
