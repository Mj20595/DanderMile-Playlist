import playerStore from "@/store/playerStore";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const PlayerSound = () => {
  const [volumeValue, setVolumeValue] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const setVolume = playerStore((state) => state.setVolume);
  const setMute = playerStore((state) => state.setMute);

  // eslint-disable-next-line
  const onVolumeChange = (event: any) => {
    setVolumeValue(event.target.value);
  };

  const onMuteHandler = () => {
    setIsMuted((prev) => !prev);
    setMute(isMuted);
  };

  useEffect(() => {
    setVolume(volumeValue);
  }, [volumeValue]);

  return (
    <div className="w-full xl:w-80 flex justify-between xl:justify-end items-center text-right text-gray-500">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMuteHandler}
          className="cursor-pointer hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faVolumeLow} size="lg" />
        </button>
        <input
          className="volume-bar max-w-24 hidden xl:inline"
          type="range"
          min="0"
          max="1.0"
          step="any"
          value={volumeValue}
          onChange={onVolumeChange}
        />
      </div>
    </div>
  );
};

export default PlayerSound;
