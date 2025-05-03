import { useRef, useState, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => {
      setIsPaused(true);
      video.controls = false;
    };
    const handlePlayEvent = () => {
      setIsPaused(false);
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlayEvent);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlayEvent);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = showControls && hasInteracted && !isPaused;
    }
  }, [showControls, hasInteracted, isPaused]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl}
        loop
        playsInline
      />

      {/* Показывать только если видео ещё не играло или поставлено на паузу */}
      {(isPaused || !hasInteracted) && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <button
            onClick={handlePlay}
            className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition text-4xl"
          >
            <CiPlay1 className="pl-1"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
