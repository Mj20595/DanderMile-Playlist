import { create } from "zustand";

interface SongInfo {
  index: number;
  title: string;
  id: string;
  thumbnail: string;
  position: number;
}

interface PlayerStore {
  nowPlay: SongInfo;
  playList: SongInfo[];
  shuffleList: SongInfo[];
  volume: number;
  mute: boolean;
  nextPic: number;
  readVideoId: (info: SongInfo) => void;
  setList: (list: SongInfo[]) => void;
  setShuffleList: () => void;
  setVolume: (value: number) => void;
  setMute: (muted: boolean) => void;
  setNextPic: () => void;
}

const playerStore = create<PlayerStore>((set, get) => ({
  nowPlay: {
    index: 0,
    title: "곡을 선택해주세요",
    id: "",
    thumbnail: "",
    position: 0,
  },
  playList: [],
  shuffleList: [],
  volume: 0.5,
  mute: false,
  nextPic: 0,
  readVideoId: (info: SongInfo) => {
    set((state) => ({ nowPlay: info }));
  },
  setList: (list: SongInfo[]) => {
    set((state) => ({ playList: list }));
    get().setShuffleList();
  },
  setShuffleList: () => {
    const newArray = get().playList.slice();
    const shuffleArray = newArray.sort(() => Math.random() - 0.5);
    set((state) => ({ shuffleList: shuffleArray }));
  },
  setVolume: (value: number) => {
    set((state) => ({ volume: value }));
  },
  setMute: (muted: boolean) => {
    set((state) => ({ mute: !muted }));
  },
  setNextPic: () => {
    const currPic = get().nextPic;
    let index = currPic;
    while (currPic === index) {
      index = Math.floor(Math.random() * 13);
    }
    set((state) => ({ nextPic: index }));
  },
}));

export default playerStore;
