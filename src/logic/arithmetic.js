const plusOne = (res) => {
    res.push({ text: "Tomorrow", date: incrDay(1) });
    res.push({
        date: incrDay(7),
        text: `In a week`,
    });
    res.push({
        date: incrMonth(1),
        text: `In a month`,
    });
    res.push({
        date: incrMonth(12),
        text: `In a year`,
    });
};

const minusOne = (res) => {
    res.push({ text: "Yesterday", date: incrDay(-1) });
    res.push({
        date: incrDay(-7),
        text: `A week ago`,
    });
    res.push({
        date: incrMonth(-1),
        text: `A month ago`,
    });
    res.push({
        date: incrMonth(-12),
        text: `A year ago`,
    });
};

const plus = (res, nb) => {
    res.push({ date: incrDay(nb), text: `In ${nb} days` });
    res.push({
        date: incrDay(7 * nb),
        text: `In ${nb} weeks`,
    });
    res.push({
        date: incrMonth(nb),
        text: `In ${nb} months`,
    });
    res.push({
        date: incrMonth(12 * nb),
        text: `In ${nb} years`,
    });
};
const minus = (res, nb) => {
    res.push({ date: incrDay(nb), text: `${nb} days ago` });
    res.push({
        date: incrDay(7 * nb),
        text: `${nb} weeks ago`,
    });
    res.push({
        date: incrMonth(nb),
        text: `${nb} months ago`,
    });
    res.push({
        date: incrMonth(12 * nb),
        text: `${nb} years ago`,
    });
};

const plusMinusHandle = (res, nb, both) => {
    if (nb == 1) {
        plusOne(res);
        if (both) {
            minusOne(res);
        }
    } else if (nb == -1) {
        minusOne(res);
    } else if (nb == 0) {
        res.push({ text: "Today", date: new Date() });
    } else {
        if (nb > 0) {
            plus(res, nb);
            if (both) {
                minus(res, nb);
            }
        } else {
            minus(res, nb);
        }
    }
};

export const getArithmetic = (res, input) => {
    if (!input.startsWith("+") && !input.startsWith("-")) {
        if (Number.isNaN(parseInt(input[0]))) return;
        const nb = parseInt(input);
        plusMinusHandle(res, nb, true);
    } else {
        const nb = parseInt(input);
        plusMinusHandle(res, nb, false);
    }
};
