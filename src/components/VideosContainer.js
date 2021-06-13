import { useEffect, useState } from "react";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (data) setVideos(data);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  console.log(videos);
  return (
    <div className="VideosContainer">
      {videos ? (
        videos.map((video) => (
          <div className="video" key={video.id}>
            <h4 className="videoTitle">{video.title}</h4>
            <p className="videoBody">{video.body}</p>
          </div>
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
export default VideosContainer;
