export const totalDays = (date) => {
    if (date?.startDate == "null" || date?.startDate == null) return "any";

    const startDate = new Date(date.startDate),
        endDate = new Date(date.endDate);

    const differenceInMilliseconds = endDate - startDate;
    return Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)) + 1;
};
