// main.d.ts
export interface Config {
  theme: ThemeType;
  language: string;
}

export enum ThemeType {
  light = "light",
  dark = "dark"
}
