import React from "react";

export default function Icon(icon) {
  console.log("checking icon here", icon);
  return icon.icon === "LIKE" ? (
    <i class="far fa-thumbs-up" />
  ) : (
    <i class="fal fa-comment-alt-lines" />
  );
}
