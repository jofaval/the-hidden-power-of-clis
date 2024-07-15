/** Types */
import { CommandEntrypointProps } from "../commands/types/command.type";
import { HelpArgs } from "./types/help.type";
/** Helpers */
import { empty } from "../shared/helpers/native.helper";
import { hasHelp } from "./helpers/help.helper";
/** Services */
import { commandService } from "../commands/services/command.service";
/** Config */
import { HELP_KEY } from "./config/help.config";
/** Services */
import { helpService } from "./services/help.service";

const everyCommand = () => {
  const commands = commandService.getEveryCommand();
  commands.filter(({ name }) => name !== HELP_KEY).forEach(helpService.help);
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
    return helpService.help(command);
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
