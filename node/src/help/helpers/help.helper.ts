import { VerboseCommand } from "../../shared/types/command.type";

export const help = (command: VerboseCommand) => {
  // TODO: describe params
  console.log(command.help);
};
