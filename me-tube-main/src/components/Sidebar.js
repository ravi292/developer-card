import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="h-screen sticky top-12 p-4 shadow-lg col-span-2">
      <div className="mb-6">
        <ul className="flex flex-col gap-2 border-b-2 py-4">
          <Link to={"/"}>
            <li className="hover:bg-gray-100">Home</li>
          </Link>
          <li className="hover:bg-gray-100">Shorts</li>
          <li className="hover:bg-gray-100">Subscriptions</li>
        </ul>
      </div>

      <div className="mb-6">
        <h1 className="font-bold pb-4">Explore</h1>
        <ul className="flex flex-col gap-2 border-b-2 py-4">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Movies</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold pb-4">Watch Later</h1>
        <ul className="flex flex-col gap-2 border-b-2 py-4">
          <li>Music</li>
          <li>Movies</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
