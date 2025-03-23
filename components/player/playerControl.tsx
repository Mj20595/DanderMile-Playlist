"use client";

import playerStore from "@/store/playerStore";
import {
  faBackwardStep,
  faCirclePause,
  faForwardStep,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const PlayerControl = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const playList = playerStore((state) => state.playList);
  const shuffleList = playerStore((state) => state.shuffleList);
  const readVideoId = playerStore((state) => state.readVideoId);

  const setNextPic = playerStore((state) => state.setNextPic);

  const nowPlay = playerStore((state) => state.nowPlay);

  const playButtonHanlder = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const loopButtonHandler = useCallback(() => {
    setIsLoop((prev) => !prev);
  }, []);

  const shuffleButtonHandler = () => {
    setIsShuffle((prev) => !prev);
  };

  const fowardButtonHandler = () => {
    if (isShuffle) {
      console.log(shuffleList);
      const songInShuffle = shuffleList.findIndex(
        (item) => item.id === nowPlay.id
      );
      const nextTrack =
        songInShuffle === shuffleList.length - 1 ? 0 : songInShuffle + 1;
      readVideoId(shuffleList[nextTrack]);
    } else {
      let nextTrack = nowPlay.index + 1;
      if (nextTrack > playList.length - 1) nextTrack = 0;
      readVideoId(playList[nextTrack]);
    }
    setNextPic();
  };

  const backwardButtonHandler = () => {
    if (isShuffle) {
      console.log(shuffleList);
      const songInShuffle = shuffleList.findIndex(
        (item) => item.id === nowPlay.id
      );
      console.log(songInShuffle);
      const prevTrack =
        songInShuffle === 0 ? shuffleList.length - 1 : songInShuffle - 1;
      readVideoId(shuffleList[prevTrack]);
    } else {
      let prevTrack = nowPlay.index - 1;
      if (prevTrack < 0) prevTrack = playList.length - 1;
      readVideoId(playList[prevTrack]);
    }
    setNextPic();
  };

  const [isWindow, setIsWindow] = useState<boolean>(false);

  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
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
    <div className="w-full xl:w-[34rem] flex flex-col-reverse xl:flex-col ">
      <div className="w-full flex justify-between xl:justify-evenly items-center mb-2 text-gray-500 text-2xl xl:text-base">
        <button
          onClick={shuffleButtonHandler}
          className=" cursor-pointer hover:text-gray-700"
        >
          {!isShuffle ? (
            <FontAwesomeIcon icon={faShuffle} size="lg" />
          ) : (
            <FontAwesomeIcon
              className="text-playlist-color-4"
              icon={faShuffle}
              size="lg"
            />
          )}
        </button>
        <button
          onClick={backwardButtonHandler}
          className=" cursor-pointer hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faBackwardStep} size="lg" />
        </button>
        <button
          onClick={playButtonHanlder}
          className="text-playlist-color-4 duration-200 scale-110 cursor-pointer text-3xl xl:text-base"
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={faCirclePause} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
          )}
        </button>
        <button
          onClick={fowardButtonHandler}
          className=" cursor-pointer hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faForwardStep} size="lg" />
        </button>
        <button
          onClick={loopButtonHandler}
          className=" cursor-pointer hover:text-gray-700"
        >
          {!isLoop ? (
            <FontAwesomeIcon icon={faRepeat} size="lg" />
          ) : (
            <FontAwesomeIcon
              className="text-playlist-color-4"
              icon={faRepeat}
              size="lg"
            />
          )}
        </button>
      </div>
      {/* <PlayerProgress
        isPlaying={isPlaying}
        isLoop={isLoop}
        fowardButtonHandler={fowardButtonHandler}
      /> */}
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
    </div>
  );
};

export default PlayerControl;
