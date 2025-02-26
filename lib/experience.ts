export const calculateYearsExperience = () => {
  const startDate = new Date("2018-05-01");
  const now = new Date();
  const diffInYears =
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffInYears);
};
