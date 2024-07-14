import { Args } from "../../args/types/args.type";
import { Command } from "../../commands/types/command.type";
import { empty } from "../../helpers/native.helper";
import {
  NamedParam,
  ParamsConfiguration,
  PositionalParam,
} from "../types/param.type";

const VALID = true;
const INVALID = false;

export type CheckPositionalParamsProps = {
  args: Args;
  params: PositionalParam[] | undefined;
};

export const validPositionalParams = ({
  args,
  params,
}: CheckPositionalParamsProps): boolean => {
  if (empty(args.positional) || empty(params)) {
    return VALID;
  }

  return VALID;
};

export type CheckNamedParamsProps = {
  args: Args;
  params: NamedParam[] | undefined;
};

export const validNamedParams = ({
  args,
  params,
}: CheckNamedParamsProps): boolean => {
  if (empty(args.named) || empty(params)) {
    return VALID;
  }

  return VALID;
};

export type CheckParamsProps = {
  args: Args;
  params: ParamsConfiguration | undefined;
};

export const validParams = ({ args, params }: CheckParamsProps): boolean => {
  if (!params || empty(params)) {
    return VALID;
  }

  return (
    validPositionalParams({ args, params: params.positional }) &&
    validNamedParams({ args, params: params.named })
  );
};

export type ParseArgsFromParamsProps = {
  args: Args;
  command: Command;
};

export const parseArgsFromParams = ({
  args,
  command,
}: ParseArgsFromParamsProps) => {
  // TODO: return type safe
  return args;
};
