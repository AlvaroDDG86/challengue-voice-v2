import { defineStore } from "pinia";
import { IVoice } from "@/models/IVoice";
import { IFIlter } from "@/models/IFIlter";
import { sortDesc, sortAsc } from "@/helpers/order";
import DATA from "@/data/voices.json";

export const useStore = defineStore("voices", {
  state: () => ({
    voices: DATA as IVoice[],
    favs: [] as IVoice[],
    active: {} as IVoice,
    filters: {
      text: "",
      tags: "All",
      order: "asc",
    } as IFIlter,
  }),
  getters: {
    getVoices: (state): IVoice[] =>
      state.voices
        .filter((voice) => {
          return (
            voice.name
              .toLowerCase()
              .includes(state.filters.text.toLowerCase()) &&
            voice.tags.some(
              (tag) =>
                state.filters.tags === "All" || state.filters.tags.includes(tag)
            )
          );
        })
        .sort(state.filters.order === "asc" ? sortAsc : sortDesc)
        .map((voice) => {
          return {
            ...voice,
            fav: state.favs.findIndex((fav) => fav.id === voice.id) !== -1,
            active: state.active && voice.id === state.active.id,
          };
        }),
    getFavs: (state): IVoice[] =>
      state.favs.map((voice) => {
        return {
          ...voice,
          fav: true,
          active: state.active && voice.id === state.active.id,
        };
      }),
    tagOptions: (state): string[] => {
      return [
        "All",
        ...state.voices.reduce((prev, current) => {
          current.tags.forEach((tag) => {
            if (prev.indexOf(tag) === -1) prev.push(tag);
          });
          return prev;
        }, [] as string[]),
      ];
    },
  },
  actions: {
    setFav(voice: IVoice): void {
      const index = this.favs.findIndex((fav) => fav.id === voice.id);
      if (index === -1) this.favs.unshift(voice);
      else this.favs.splice(index, 1);
    },
    setActiveRandom (): void {
      const random = this.voices[Math.floor((Math.random() * this.voices.length - 1) + 1)]
      this.active = random
    },
  },
});
