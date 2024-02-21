import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm border bg-gray-100 w-[70rem] m-8 p-2 rounded-lg">
      <img src={USER_ICON} alt="user" className="w-8 h-8" />
      <div className="mx-4">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
