import { dirname } from "path";
import { CONFIG, Config, ConfigKey } from "../constants/config.constants";

let config = { ...CONFIG } as Config;
let loaded = false;

const configService = {
  getOrigin: () => {
    return process.argv[1] ?? "";
  },
  getConfigPath: (path: string | undefined) => {
    if (!path) {
      return dirname(configService.getOrigin());
    } else {
      return path;
    }
  },
  loadConfig: (path?: string) => {
    if (loaded) {
      return;
    }

    const configPath = configService.getConfigPath(path);
    const localConfig = configService.parseConfig(configPath);
    const givenConfig = configService.parseConfig(configPath);

    config = Object.assign({}, localConfig, givenConfig);
    loaded = true;
  },
  parseConfig: (content: string): Config => {
    const parsed = {} as Config;

    // TODO: implement

    return parsed;
  },
  getConfigValue: ({ key, path }: { key: ConfigKey; path?: string }) => {
    configService.loadConfig(path);

    return config[key];
  },
};
