import { COMMANDS } from "./config/commands.config";
import { parseArgs } from "./shared/helpers/args.helper";
import { validateParams } from "./shared/helpers/params.helper";
import { Args } from "./shared/types/args.type";
import { VerboseCommand } from "./shared/types/command.type";

const fallback = (args: Args) => {
  console.log("No command provided", { args });
  COMMANDS.help.entrypoint({ args, command: COMMANDS.help });
};

type InvalidParamsProps = {
  args: Args;
  command: VerboseCommand;
};

const invalidParams = ({ args, command }: InvalidParamsProps) => {
  // TODO: implement more granular effort

  console.log({ args });

  COMMANDS.help.entrypoint({
    args: { ...args, positional: [command.name] },
    command: COMMANDS.help,
  });
};

function main() {
  const args = parseArgs(process.argv);

  const command = Object.values(COMMANDS).find(
    (command) => command.name === args.command
  );

  if (!command) {
    return fallback(args);
  } else if (!validateParams({ args, params: command.params })) {
    return invalidParams({ args, command });
  } else {
    return command.entrypoint({ args, command });
  }
}

main();
