import { atom, selector } from "recoil";

export const nwcount = atom({
  key: "nwcount",
  default: 106,
});
export const jocount = atom({
  key: "jocount",
  default: 0,
});
export const nocount = atom({
  key: "nocount",
  default: 12,
});
export const msgcount = atom({
  key: "msgcount",
  default: 0,
});

export const totalcount = selector({
  key: "totalcount",
  get: ({ get }) => {
    const ntewcount = get(nwcount);
    const jobecount = get(jocount);
    const noteicount = get(nocount);
    const msgecount = get(msgcount);
    return ntewcount + jobecount + noteicount + msgecount;
  },
});
