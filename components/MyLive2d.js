import { useEffect, useState } from "react";
import { siteConfig } from '@/lib/config'

export default function VideoComponent() {
  const videoSources = siteConfig('LIVE2D_VIDEO');
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const randomVideo = videoSources[Math.floor(Math.random() * videoSources.length)];
    setSelectedVideo(randomVideo);
  }, []);

  return (
    <div className="video-container">
      {selectedVideo && (
        <video autoPlay loop muted>
          <source src={selectedVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
