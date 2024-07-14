export const getObjectSize = (obj: Object) => {
  if (!obj || typeof obj !== "object") {
    return 0;
  } else {
    return Object.keys(obj).length;
  }
};

export const objectIsEmpty = (obj: Object) => {
  return getObjectSize(obj) === 0;
};

export const getArraySize = (array: any[]) => {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    return array.length;
  }
};
