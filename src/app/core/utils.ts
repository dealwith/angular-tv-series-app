export const compare = (
  a: number | string,
  b: number | string,
  isAsc: boolean
) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);

export const uniqueBy = (key: string, array: []) => {
  const setStructure = new Set();
  return array.filter(
    (object) => !setStructure.has(object[key]) && setStructure.add(object[key])
  );
};
