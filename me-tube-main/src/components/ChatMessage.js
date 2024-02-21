import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img src={USER_ICON} alt="user" className="w-8 h-7 ml-1" />
      <span className="font-semibold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
