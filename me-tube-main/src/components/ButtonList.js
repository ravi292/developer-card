import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Music",
  "Mixes",
  "Live",
  "News",
  "Podcasts",
  "Ghazal",
  "Javascript",
  "Twitter",
  "Stock Market",
  "Football",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((button) => {
        return <Button name={button} key={button} />;
      })}
    </div>
  );
};

export default ButtonList;
