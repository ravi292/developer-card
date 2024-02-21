import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { cacheResults } from "../utils/searchSlice";
import {
  HAMBURGER_ICON,
  LOGO_URL,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);

    // update the cache
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex(
        (prevIndex) => (prevIndex + 1) % suggestions.length
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex(
        (prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length
      );
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 bg-white grid grid-flow-col py-2 px-4 shadow-lg">
      <div className="flex col-span-2 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          src={HAMBURGER_ICON}
          alt="hamburger icon"
          className="h-6 items-center cursor-pointer"
        />
        <a href="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="h-14 ml-4 items-center cursor-pointer"
          />
        </a>
      </div>

      <div className="col-span-9 px-10 mt-3">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 w-1/2 h-8  border border-gray-400 rounded-l-full py-2"
            value={searchText}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button>
            <img
              src={SEARCH_ICON}
              alt="search icon"
              className="h-8 px-4 py-1 border border-gray-400 rounded-r-full bg-gray-100"
            />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  onMouseLeave={() => setSelectedSuggestionIndex(false)}
                  className={`py-2 px-5 hover:bg-gray-100 cursor-pointer ${
                    selectedSuggestionIndex === index ? "bg-gray-100" : ""
                  }`}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1 items-center justify-end mr-8">
        <img
          src={USER_ICON}
          alt="user icon"
          className="h-8 items-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
