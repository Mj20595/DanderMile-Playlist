"use client";
import Header from "@/components/header/header";
import Gallery from "@/components/mainConainer/gallery";
import ListContainer from "@/components/mainConainer/listContaienr";
import MobileListContainer from "@/components/mainConainer/mobileListContainer";
import PictureContainer from "@/components/mainConainer/pictureContainer";
import Player from "@/components/player/player";
import playerStore from "@/store/playerStore";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const setList = playerStore((state) => state.setList);
  const nextPic = playerStore((state) => state.nextPic);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_PLAYLIST_ID;

  useEffect(() => {
    const readPlaylist = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
      );
      const data = await response.data;
      const { items } = data;
      const list = [];
      for (const item of items) {
        const { snippet } = item;
        const info = {
          index: snippet?.position,
          title: snippet?.title,
          id: snippet?.resourceId.videoId,
          thumbnail: snippet?.thumbnails?.default?.url,
          position: snippet?.position + 1,
        };
        list.push(info);
      }
      setList(list);
    };

    readPlaylist();
  }, [setList]);
  return (
    <div
      className={`relative bg-[url('/img/img_0${nextPic}.jpg')]  bg-cover bg-center grid justify-items-center min-h-dvh max-h-screen select-none after:content-[''] after:absolute after:w-full after:h-full after:backdrop-blur-md noto-sans-400 `}
    >
      <div className="relative z-50 container bg-playlist-color-2/65 xl:bg-playlist-color-2 w-dvw h-dvh max-w-none xl:w-[1280px] xl:h-[720px] flex flex-col justify-between lg:row-start-2 items-center rounded-none lg:rounded-md overflow-hidden">
        <Header />
        <main className="w-full xl:h-[560px] flex flex-col xl:flex-row gap-x-3 px-10 xl:pl-4 xl:pr-0 ">
          <Gallery />
          <PictureContainer />
          <MobileListContainer />
          <ListContainer />
        </main>
        <Player />
      </div>
    </div>
  );
}
