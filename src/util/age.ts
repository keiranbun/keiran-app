export const currentAge = () => {
  const birthday = new Date(1994, 2, 21);
  const currentDate = new Date();

  let yearComparison = currentDate.getFullYear() - birthday.getFullYear();

  // Do if Jan, Feb, Mar calculations
  if (currentDate.getMonth() == 2 && currentDate.getDate() < 21) {
    yearComparison--;
  } else if (currentDate.getMonth() < 2) {
    yearComparison--;
  }

  return yearComparison;
};
