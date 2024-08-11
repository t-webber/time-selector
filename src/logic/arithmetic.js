import { incrDay, incrMonth } from "./dates.js";

const y = (s) => "year".startsWith(s);
const m = (s) => "month".startsWith(s);
const w = (s) => "week".startsWith(s);
const d = (s) => "day".startsWith(s);

const plusOne = (res, s) => {
    if (d(s)) res.push({ text: "Tomorrow", date: incrDay(1) });
    if (w(s))
        res.push({
            date: incrDay(7),
            text: `In a week`,
        });
    if (m(s))
        res.push({
            date: incrMonth(1),
            text: `In a month`,
        });
    if (y(s))
        res.push({
            date: incrMonth(12),
            text: `In a year`,
        });
};

const minusOne = (res, s) => {
    if (d(s)) res.push({ text: "Yesterday", date: incrDay(-1) });
    if (w(s))
        res.push({
            date: incrDay(-7),
            text: `A week ago`,
        });
    if (m(s))
        res.push({
            date: incrMonth(-1),
            text: `A month ago`,
        });
    if (y(s))
        res.push({
            date: incrMonth(-12),
            text: `A year ago`,
        });
};

const plus = (res, nb, s) => {
    if (d(s)) res.push({ date: incrDay(nb), text: `In ${nb} days` });
    if (w(s))
        res.push({
            date: incrDay(7 * nb),
            text: `In ${nb} weeks`,
        });
    if (m(s))
        res.push({
            date: incrMonth(nb),
            text: `In ${nb} months`,
        });
    if (y(s))
        res.push({
            date: incrMonth(12 * nb),
            text: `In ${nb} years`,
        });
};

const minus = (res, nb, s) => {
    if (d(s)) res.push({ date: incrDay(nb), text: `${nb} days ago` });
    if (w(s))
        res.push({
            date: incrDay(7 * nb),
            text: `${nb} weeks ago`,
        });
    if (m(s))
        res.push({
            date: incrMonth(nb),
            text: `${nb} months ago`,
        });
    if (y(s))
        res.push({
            date: incrMonth(12 * nb),
            text: `${nb} years ago`,
        });
};

const plusMinusHandle = (res, nb, both, s) => {
    if (nb == 1) {
        plusOne(res, s);
        if (both) {
            minusOne(res, s);
        }
    } else if (nb == -1) {
        minusOne(res, s);
    } else if (nb == 0) {
        res.push({ text: "Today", date: new Date() });
    } else {
        if (nb > 0) {
            plus(res, nb, s);
            if (both) {
                minus(res, nb, s);
            }
        } else {
            minus(res, nb, s);
        }
    }
};

const removeHeadNumbers = (s) => {
    let index = 0;
    console.log("before", s);
    while (Number.isNaN(parseInt(s[index])) && index < s.length) {
        index++;
    }
    if (index == s.length) {
        return undefined;
    }
    while (Number.isInteger(parseInt(s[index])) && index < s.length) {
        index++;
    }
    console.log("after", s.slice(index));
    return s.slice(index);
};

export const getArithmetic = (res, input) => {
    input = input.replace(/\s/g, "");
    if (!input.startsWith("+") && !input.startsWith("-")) {
        if (Number.isNaN(parseInt(input[0]))) return;
        const nb = parseInt(input);
        plusMinusHandle(res, nb, true, removeHeadNumbers(input));
    } else {
        const nb = parseInt(input);
        plusMinusHandle(res, nb, false, removeHeadNumbers(input));
    }
};
