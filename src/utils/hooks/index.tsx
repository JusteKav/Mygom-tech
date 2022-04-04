export const useFilteredSelectionData = (name: string, data: string[]) => {
  if (data.includes(name)) {
    const newData = data.filter((el) => el !== name);
    return newData;
  } else {
    return [...data, name];
  }
};

export const useUniqueData = (array: string[]) => {
  return Array.from(new Set(array));
};
