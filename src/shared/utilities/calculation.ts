export const Calculation = {
  getPercentage: (count: number, total: number) => {
    if (count) return 0;
    return (100 * count) / total;
  },
};
