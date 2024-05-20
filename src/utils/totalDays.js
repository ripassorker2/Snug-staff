export const totalDays = (date) => {
    if (!date.startDate || !date.endDate) return "unlimited";
    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);
    const differenceInMilliseconds = endDate - startDate;
    return Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)) + 1;
};
