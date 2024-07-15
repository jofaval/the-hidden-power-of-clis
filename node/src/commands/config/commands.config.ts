/** Configs */
import { HELP_KEY } from "../../help/config/help.config";
import { VALIDATE_KEY } from "../../validate/config/validate.config";
/** Commands */
import { handleHelp } from "../../help/help.command";
import { handleValidate } from "../../validate/validate.command";
/** Types */
import { EntrypointConfig } from "../types/command.type";

export type VerboseCommandsHelper<T extends Object> = {
  [k in keyof T]: T[k] & { name: k };
};

const verboseCommands = <T extends EntrypointConfig>(obj: T) => {
  const verbose = Object.fromEntries(
    Object.entries(obj).map(([name, value]) => {
      return [name, { ...value, name }];
    })
  );

  return verbose as VerboseCommandsHelper<T>;
};

// referential transparency example, exposed but not modified
export const COMMANDS = verboseCommands({
  [HELP_KEY]: {
    // FIXME: entrypoint type
    entrypoint: handleHelp as any,
    alias: ["man", "h"],
    params: {
      positional: [{ name: "command", optional: true, help: "" }],
    },
    help: "",
  },
  [VALIDATE_KEY]: {
    entrypoint: handleValidate,
    alias: ["v"],
    params: {
      named: [{ name: "fix", abbreviations: ["f"], help: "" }],
      positional: [{ name: "path", optional: true, help: "" }],
    },
    help: "",
  },
});

export type CommandKey = keyof typeof COMMANDS;
