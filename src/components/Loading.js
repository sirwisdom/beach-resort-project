import React from "react";
import LoadingIcon from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading-div">
      <img src={LoadingIcon} alt="loading..." className="loading" />
    </div>
  );
}
