// export const useUniqueData = (name: string, data: string[]) => {
//   if (data.includes(name)) {
//     const newData = data.filter((el) => el !== name);
//     return newData;
//   } else {
//     return [...data, name];
//   }
// };

export const useUniqueData = (array: any[]) => {
  return Array.from(new Set(array));
};

// export const useDisplay = (display: string, setDisplay: any) => {
//   if (display === 'none') {
//     setDisplay('block');
//   } else {
//     setDisplay('none');
//   }
// };
