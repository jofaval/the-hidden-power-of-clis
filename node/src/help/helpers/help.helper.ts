import { VerboseCommand } from "../../commands/types/command.type";

export const hasHelp = (command: VerboseCommand) => {
  return command.help !== undefined;
};

export const parseHelp = (command: VerboseCommand) => {
  // TODO: describe params
  return command.help;
};

export const help = (command: VerboseCommand) => {
  if (hasHelp(command)) {
    console.log(parseHelp(command));
  }
};
