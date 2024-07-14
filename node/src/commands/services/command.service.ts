import { COMMANDS, CommandKey } from "../config/commands.config";

export const commandService = {
  findSingleCommand: (query: CommandKey | (string & {})) => {
    return Object.values(COMMANDS).find((command) => command.name === query);
  },
  getEveryCommand: () => {
    return Object.values(COMMANDS);
  },
};
