import playerStore from "@/store/playerStore";
import React from "react";

const PictureContainer = React.memo(() => {
  const nextPic = playerStore((state) => state.nextPic);
  return (
    <div className="relative min-w-24 max-w-[55vh] xl:max-w-none w-full h-fit xl:h-full bg-white rounded-full xl:rounded-2xl border-4 xl:border-2 border-playlist-color-4 overflow-hidden aspect-square mx-auto">
      <div
        className={
          `relative w-full h-full bg-cover  bg-[url('/img/img_${nextPic}.png')] ` +
          (nextPic > 9 ? "bg-top" : "bg-center")
        }
      ></div>
    </div>
  );
});
export default PictureContainer;
