import { Config, ThemeType } from "@/types/config";
import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ConfigStore {
  config: Config;
  setConfig: (config: Config) => void;
  setTheme: (theme: ThemeType) => void;
}

const a = "1";
console.log(a);
// 创建一个全局store
const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      config: {
        theme: ThemeType.light,
        language: "en"
      },
      setConfig: (newConfig) =>
        set((state) => ({ config: { ...state.config, ...newConfig } })),
      setTheme: (theme: ThemeType) =>
        set((state) => ({
          config: {
            ...state.config,
            theme
          }
        }))
    }),
    {
      name: "config-storage", // 用于标识存储在localstorage中的数据
      storage: createJSONStorage(() => localStorage) // 使用localStorage作为存储介质
    }
  )
);

export default useConfigStore;
