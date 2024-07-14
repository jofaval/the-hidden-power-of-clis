/** Config */
import { COMMANDS } from "../config/commands.config";
/** Types */
import { Args } from "../shared/types/args.type";
import { CommandEntrypointProps } from "../shared/types/command.type";
/** Helpers */
import { getArraySize } from "../shared/helpers/native.helper";
import { help } from "./helpers/help.helper";

const everyCommand = () => {
  Object.values(COMMANDS)
    .filter((command) => command.help)
    .forEach((command) => help(command));
};

const noSingleCommandProvided = (args: Args) => {
  console.error("No single command provided", { args });
};

export type SingleCommandNotFoundProps = {
  args: Args;
  query: string;
};

const singleCommandNotFound = ({ args, query }: SingleCommandNotFoundProps) => {
  console.log(`"${query}" not found`, { args });
};

const singleCommand = (args: Args) => {
  const query = args.positional[0];
  if (!query) {
    return noSingleCommandProvided(args);
  }

  const command = Object.values(COMMANDS).find(({ name }) => name === query);

  if (!command) {
    return singleCommandNotFound({ args, query });
  } else {
    return help(command);
  }
};

export const handleHelp = ({ args }: CommandEntrypointProps) => {
  if (getArraySize(args.positional) === 0) {
    everyCommand();
  } else {
    singleCommand(args);
  }
};
