import { Args } from "./args.type";
import { ParamsConfiguration } from "./param.type";

export type CommandEntrypointProps = {
  args: Args;
  command: Command;
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
