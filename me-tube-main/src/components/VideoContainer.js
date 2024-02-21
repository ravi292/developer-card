import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    const videoData = await fetch(YOUTUBE_VIDEOS_API);

    const videoJSON = await videoData.json();

    setVideos(videoJSON.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard details={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
