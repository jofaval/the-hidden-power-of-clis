import { VerboseCommand } from "../../commands/types/command.type";
import { hasHelp, parseHelp } from "../helpers/help.helper";

export const helpService = {
  help: (command: VerboseCommand) => {
    if (hasHelp(command)) {
      console.log(parseHelp(command));
    }
  },
};
