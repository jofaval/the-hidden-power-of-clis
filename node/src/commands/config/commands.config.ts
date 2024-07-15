/** Configs */
import { HELP_KEY } from "../../help/config/help.config";
import { VALIDATE_KEY } from "../../validate/config/validate.config";
/** Commands */
import { handleHelp } from "../../help/help.command";
import { handleValidate } from "../../validate/validate.command";
/** Types */
import { empty, remapObject } from "../../shared/helpers/native.helper";
import { NamedParam } from "../../shared/params/types/param.type";
import { Command, EntrypointConfig } from "../types/command.type";

const abbreviations = new Set<string>();
const names = new Set<string>();

const checkAbbreviationDuplicity = (abbreviation: string) => {
  if (abbreviations.has(abbreviation)) {
    throw new Error(`Abbreviation "${abbreviation}" has already been used`);
  } else {
    abbreviations.add(abbreviation);
  }
};

const checkNameDuplicity = (named: NamedParam) => {
  if (names.has(named.name)) {
    throw new Error(`Name "${named.name}" is duplicated`);
  } else {
    names.add(named.name);
  }
};

const checkAbbreviations = (abbreviations: string[] | undefined) => {
  if (!abbreviations) {
    return;
  }

  for (const abbreviation of abbreviations) {
    checkAbbreviationDuplicity(abbreviation);
  }
};

const checkCollisions = (value: Command) => {
  if (value.params?.positional) {
    for (const positional of value.params?.positional) {
      checkNameDuplicity(positional);
    }
  }

  if (value.params?.named) {
    for (const named of value.params?.named) {
      checkNameDuplicity(named);
      checkAbbreviations(named.abbreviations);
    }
  }
};

export type VerboseCommandsHelper<T extends Object> = {
  [k in keyof T]: T[k] & { name: k };
};

const verboseCommands = <T extends EntrypointConfig>(commands: T) => {
  const verbose = remapObject(commands, ([name, value]) => {
    if (!empty(value.params)) {
      checkCollisions(value);
    }

    return [name, { ...value, name }];
  });

  names.clear();
  abbreviations.clear();

  return verbose as VerboseCommandsHelper<T>;
};

// referential transparency example, exposed but not modified
export const COMMANDS = verboseCommands({
  [HELP_KEY]: {
    entrypoint: handleHelp,
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
