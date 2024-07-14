import { handleHelp } from "../help/help.command";
import { Command } from "../shared/types/command.type";
import { handleValidate } from "../validate/validate.command";

export type VerboseCommandsHelper<T extends Object> = {
  [k in keyof T]: T[k] & { name: k };
};

const verboseCommands = <T extends Object>(obj: T) => {
  const verbose = Object.fromEntries(
    Object.entries(obj).map(([name, value]) => {
      return [name, { ...value, name }];
    })
  );

  return verbose as VerboseCommandsHelper<T>;
};

export const COMMANDS = verboseCommands({
  help: {
    entrypoint: handleHelp,
    alias: ["man", "h"],
    params: {
      positional: [{ name: "command", optional: true, help: "" }],
    },
    help: "",
  } as Command,
  validate: {
    entrypoint: handleValidate,
    alias: ["v"],
    params: {
      named: [{ name: "fix", abbreviations: ["f"], help: "" }],
    },
    help: "",
  } as Command,
} as const);
