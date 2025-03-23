"use client";

import playerStore from "@/store/playerStore";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  isPlaying: boolean;
  isLoop: boolean;
  fowardButtonHandler: () => void;
}

const PlayerProgress = ({ isPlaying, isLoop, fowardButtonHandler }: Props) => {
  const [isWindow, setIsWindow] = useState<boolean>(false);

  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const nowPlay = playerStore((state) => state.nowPlay);
  const volume = playerStore((state) => state.volume);
  const mute = playerStore((state) => state.mute);

  const playerRef = useRef<ReactPlayer>(null);

  // eslint-disable-next-line
  const onDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current) return;
    setPlayed(parseFloat(event.target.value)); // 재생 포인트 위치 실시간 변경
    playerRef.current.seekTo(parseFloat(event.target.value)); // 실제 영상 재생 위치 실시간 변경
  };

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <>
      <div className="absolute">
        {isWindow && (
          <div>
            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=${nowPlay.id}`}
              width={0}
              height={0}
              playing={isPlaying}
              volume={volume}
              loop={isLoop}
              muted={mute}
              onEnded={fowardButtonHandler}
              onDuration={setDuration}
              onProgress={({ played }) => setPlayed(played)}
            />
          </div>
        )}
      </div>
      <div className="text-xs flex items-center gap-2 text-gray-500 mb-6 xl:mb-0">
        <span>{formatTime(played * duration)}</span>
        <input
          className="player-bar"
          type="range"
          min="0"
          max="0.99999"
          step="any"
          value={played}
          onChange={onDurationChange}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </>
  );
};

export default PlayerProgress;
