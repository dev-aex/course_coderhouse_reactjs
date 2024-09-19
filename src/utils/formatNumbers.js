export const formatNumbers = (number) => {
  return "DOP$ " + number.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};