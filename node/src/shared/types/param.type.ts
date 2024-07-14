import { ZodAny } from "zod";

export type ParamType = "positional" | "named";

export type GenericParam = {
  name: string;
  optional?: boolean;
  /** If not provided, the parameter is just a flag (exists=true, notProvided=false) */
  validator?: ZodAny;
  help?: string;
};

export type PositionalParam = {} & GenericParam;

export type NamedParam = {
  abbreviations?: string[];
} & GenericParam;

export type Param =
  | ({
      type: "positional";
    } & PositionalParam)
  | ({ type: "named" } & NamedParam);

export type ParamsConfiguration = {
  named: NamedParam[];
  positional: PositionalParam[];
};
