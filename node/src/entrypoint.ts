/** Services */
import { commandService } from "./commands/services/command.service";
/** Config */
import { HELP_KEY } from "./help/config/help.config";
/** Types */
import { VerboseCommand } from "./commands/types/command.type";
import { Args } from "./shared/args/types/args.type";
/** Helpers */
import { parseArgs } from "./shared/args/helpers/args.helper";
import {
  mapArgsFromParams,
  validParams,
} from "./shared/params/helpers/params.helper";

const fallback = (args: Args) => {
  console.log("No command provided", { args });

  const helpCommand = commandService.findSingleCommand(HELP_KEY);
  if (helpCommand) {
    helpCommand.entrypoint({ args, command: helpCommand });
  }
};

type InvalidParamsProps = {
  args: Args;
  command: VerboseCommand;
};

const onInvalidParams = ({ args, command }: InvalidParamsProps) => {
  // TODO: implement more granular effort/detail

  console.log({ args });

  const helpCommand = commandService.findSingleCommand(HELP_KEY);

  if (helpCommand) {
    helpCommand.entrypoint({
      args: { ...args, positional: { command: command.name } },
      command: helpCommand,
    });
  }
};

export const entrypoint = () => {
  const args = parseArgs(process.argv);
  const command = commandService.findSingleCommand(args.command);

  if (!command) {
    return fallback(args);
  } else if (!validParams({ args, params: command.params })) {
    return onInvalidParams({ args, command });
  } else {
    return command.entrypoint({
      args: mapArgsFromParams({ args, command }),
      command,
    });
  }
};
