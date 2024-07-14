import { Args } from "../../shared/args/types/args.type";

export type HelpArgs = Args<{
  positional: {
    command?: string;
  };
}>;
