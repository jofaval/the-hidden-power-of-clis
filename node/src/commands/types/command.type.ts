/** Types */
import { Args } from "../../shared/args/types/args.type";
import { ParamsConfiguration } from "../../shared/params/types/param.type";

export type CommandEntrypointGenericBag = {
  args?: Args;
  command?: Command;
};

export type CommandEntrypointProps<
  T extends CommandEntrypointGenericBag | undefined = undefined
> = {
  args: T extends CommandEntrypointGenericBag
    ? T["args"] extends Args
      ? T["args"]
      : Args
    : Args;
  command: T extends CommandEntrypointGenericBag
    ? T["command"] extends Command
      ? T["command"]
      : Command
    : Command;
};

export type Command = {
  entrypoint: (props: CommandEntrypointProps) => void;
  alias?: string[];
  help?: string;
  params?: ParamsConfiguration;
};

export type EntrypointConfig = Record<string, Command>;

export type VerboseCommand = {
  name: string;
} & Command;
