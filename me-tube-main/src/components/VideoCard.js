const VideoCard = ({ details }) => {
  const { snippet, statistics } = details;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-96 p-2 m-2 cursor-pointer shadow-lg">
      <img
        src={thumbnails.high.url}
        alt="video"
        className="w-full rounded-xl"
      />
      <h1 className="font-bold py-2 mb-1">{title}</h1>
      <p className="text-sm text-gray-900 mb-2">{channelTitle}</p>
      <p className="text-sm text-gray-800">{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
