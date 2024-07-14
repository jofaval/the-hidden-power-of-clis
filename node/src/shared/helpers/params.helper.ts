import { Args } from "../types/args.type";
import { ParamsConfiguration } from "../types/param.type";
import { getArraySize, getObjectSize, objectIsEmpty } from "./native.helper";

const VALID = true;
const INVALID = false;

export type CheckPositionalParamsProps = {
  args: Args;
  params: ParamsConfiguration["positional"];
};

export const checkPositionalParams = ({
  args,
  params,
}: CheckPositionalParamsProps): boolean => {
  if (getArraySize(args.positional) === 0) {
    return VALID;
  }

  return VALID;
};

export type CheckNamedParamsProps = {
  args: Args;
  params: ParamsConfiguration["named"];
};

export const checkNamedParams = ({
  args,
  params,
}: CheckNamedParamsProps): boolean => {
  if (getObjectSize(args.named) === 0) {
    return VALID;
  }

  return VALID;
};

export type CheckParamsProps = {
  args: Args;
  params: ParamsConfiguration | undefined;
};

export const validateParams = ({ args, params }: CheckParamsProps): boolean => {
  if (!params || objectIsEmpty(params)) {
    return VALID;
  }

  return (
    checkPositionalParams({ args, params: params.positional }) &&
    checkNamedParams({ args, params: params.named })
  );
};
