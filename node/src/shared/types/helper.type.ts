export type GenericSafeGuard<
  TBag extends object | undefined,
  T extends {
    key: TBag extends object ? keyof TBag : string;
    fallback: any;
    generic: any;
  }
> = TBag extends T["generic"]
  ? TBag[T["key"]] extends T["fallback"]
    ? TBag[T["key"]]
    : T["fallback"]
  : T["fallback"];
