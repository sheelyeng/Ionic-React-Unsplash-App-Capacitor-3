export const REACT_UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const REACT_API_URL = process.env.REACT_APP_API_URL;

export const SCREEN_HEIGHT: number = Math.round(window.innerHeight);
export const SCREEN_WIDTH: number = Math.round(window.innerWidth);

export type COLOR_TYPES =
  | "black_and_white"
  | "black"
  | "white"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "magenta"
  | "green"
  | "teal"
  | "blue";

export type ORIENTATION_TYPES = "landscape" | "portrait" | "squarish";

export type ORDER_BY_TYPES = "featured" | "latest" | "oldest" | "position";

export const MAX_PER_PAGE = 21;
