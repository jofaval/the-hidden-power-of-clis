export const getObjectSize = (obj: Object | undefined) => {
  if (!obj || typeof obj !== "object") {
    return 0;
  } else {
    return Object.keys(obj).length;
  }
};

export const objectIsEmpty = (obj: Object | undefined) => {
  return getObjectSize(obj) === 0;
};

export const getArraySize = (array: any[] | undefined) => {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    return array.length;
  }
};

export const arrayIsEmpty = (array: any[] | undefined) => {
  return getArraySize(array) === 0;
};

export const empty = (raw: any) => {
  if ("object") {
    return objectIsEmpty(raw);
  } else if (Array.isArray(raw)) {
    return arrayIsEmpty(raw);
  }

  return Boolean(raw);
};

export const remapObject = <
  T extends Record<string, any>,
  TKeyValue extends [keyof T, T[keyof T]]
>(
  object: T,
  remap: (value: TKeyValue, index: number, array: TKeyValue[]) => any
) => {
  return Object.fromEntries(Object.entries(object).map(remap));
};
