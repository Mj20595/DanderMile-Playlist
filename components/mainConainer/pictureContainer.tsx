import playerStore from "@/store/playerStore";
import React from "react";

const PictureContainer = React.memo(() => {
  const nextPic = playerStore((state) => state.nextPic);
  return (
    <div className="relative min-w-24 max-w-[55vh] xl:max-w-none w-full h-fit xl:h-full bg-white rounded-full xl:rounded-2xl border-4 xl:border-2 border-playlist-color-4 overflow-hidden aspect-square mx-auto">
      <div
        className={`relative w-full h-full bg-cover bg-center bg-[url('/img/img_0${nextPic}.jpg')]`}
      ></div>
    </div>
  );
});
export default PictureContainer;
