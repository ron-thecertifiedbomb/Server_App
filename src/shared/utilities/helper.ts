export default class Helper {
  static passwordStrenghtCounter(text: string) {
    let count = 0;

    if (!text) return count;

    const lowerRegex = /(?=.*[a-z])/;
    const upperRegex = /(?=.*[A-Z])/;
    const numberRegex = /(?=.*\d)/;
    const symbolRegex = /(?=.*\W)/;

    if (text?.length >= 8) count += 5;
    if (lowerRegex.test(text)) count++;
    if (upperRegex.test(text)) count++;
    if (numberRegex.test(text)) count++;
    if (symbolRegex.test(text)) count++;

    return count;
  }

  static passwordStrengthColor = (
    passwordStrengthCount: number,
    showPasswordStrength: boolean = false,
    isStyle: boolean = true
  ) => {
    if (!showPasswordStrength) return;
    if (passwordStrengthCount >= 1 && passwordStrengthCount <= 7) {
      if (isStyle) return '#ffa500';
      return `border-orange-500 text-orange-500`;
    } else if (passwordStrengthCount >= 8 && passwordStrengthCount <= 9) {
      if (isStyle) return '#008000';
      return `border-green-500 text-green-500`;
    } else {
      if (isStyle) return '#999999';
      return `border-gray-500 text-gray-500`;
    }
  };

  static passwordStrengthString = (passwordStrengthCount: number) => {
    if (passwordStrengthCount >= 0 && passwordStrengthCount <= 5) return 'Weak';
    if (passwordStrengthCount >= 6 && passwordStrengthCount <= 7) return 'Moderate';
    if (passwordStrengthCount >= 8 && passwordStrengthCount <= 9) return 'Strong';

    return 'Weak';
  };
}
