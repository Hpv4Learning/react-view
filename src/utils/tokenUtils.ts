import { GlobalStyles } from "../constants/style";

export const createPercentageColor = (percentage: number) => {
  if (percentage === 0) return GlobalStyles.grey500Text.color;

  if (percentage > 0) {
    return GlobalStyles.greenText200.color;
  } else {
    return GlobalStyles.redText200.color;
  }
};
