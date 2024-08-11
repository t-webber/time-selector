const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "Mai",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const getDayAndMonthStr = (date) => {
    return { day: date.getDate(), month: MONTHS[date.getMonth()] };
};

export const incrDay = (nbDays) => {
    const date = new Date();
    date.setDate(date.getDate() + nbDays);
    return date;
};
export const incrMonth = (nbMonths) => {
    const date = new Date();
    date.setMonth(date.getMonth() + nbMonths);
    return date;
};
