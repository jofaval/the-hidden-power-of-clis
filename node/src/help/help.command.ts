/** Types */
import { CommandEntrypointProps } from "../shared/commands/types/command.type";
import { HelpArgs } from "./types/help.type";
/** Helpers */
import { empty } from "../shared/helpers/native.helper";
import { hasHelp, help } from "./helpers/help.helper";
/** Services */
import { commandService } from "../shared/commands/services/command.service";
/** Config */
import { HELP_KEY } from "./config/help.config";

const everyCommand = () => {
  const commands = commandService.getEveryCommand();
  commands.filter(({ name }) => name !== HELP_KEY).forEach(help);
};

const noSpecificCommand = () => {
  console.log("TODO: Magic CLI description");

  everyCommand();
};

const noSingleCommandProvided = (args: HelpArgs) => {
  console.error("No single command provided", { args });
};

export type SingleCommandNotFoundProps = {
  args: HelpArgs;
  query: string;
};

const singleCommandNotFound = ({ args, query }: SingleCommandNotFoundProps) => {
  console.error(`"${query}" not found`, { args });

  everyCommand();
};

const singleCommand = (args: HelpArgs) => {
  const query = args.positional.command;
  if (!query) {
    return noSingleCommandProvided(args);
  }

  const command = commandService.findSingleCommand(query);

  if (!command) {
    return singleCommandNotFound({ args, query });
  } else if (hasHelp(command)) {
    return help(command);
  } else {
    console.error("This command does not provide help");
  }
};

export const handleHelp = ({
  args,
}: CommandEntrypointProps<{ args: HelpArgs }>) => {
  if (empty(args.positional)) {
    noSpecificCommand();
  } else {
    singleCommand(args);
  }
};
