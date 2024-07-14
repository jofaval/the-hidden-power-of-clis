export const CONFIG = {
  DEFAULT_EXTENSION: ".ts",
  BASE_TEMPLATE: "",
};

export type Config = typeof CONFIG;

export type ConfigKey = keyof Config;
