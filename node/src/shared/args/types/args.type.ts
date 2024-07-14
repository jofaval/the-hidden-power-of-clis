export type ArgsParamsFallback = Record<string, string>;

export type TArgsGenericBag = {
  positional?: ArgsParamsFallback;
  named?: ArgsParamsFallback;
};

export type Args<T extends TArgsGenericBag | undefined = undefined> = {
  agent: string;
  command: string;
  named: T extends TArgsGenericBag
    ? T["named"] extends ArgsParamsFallback
      ? T["named"]
      : ArgsParamsFallback
    : ArgsParamsFallback;
  origin: string;
  positional: T extends TArgsGenericBag
    ? T["positional"] extends ArgsParamsFallback
      ? T["positional"]
      : ArgsParamsFallback
    : ArgsParamsFallback;
  target?: string;
};
