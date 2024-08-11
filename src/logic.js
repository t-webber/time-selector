const incrDay = (nbDays) => {
    const date = new Date();
    date.setDate(date.getDate() + nbDays);
};
const incrMonth = (nbMonths) => {
    const date = new Date();
    date.setMonth(date.getMonth() + nbMonths);
};

const STRINGS = {
    today: new Date(),
    now: new Date(),
    tomorrow: incrDay(1),
    yesterday: incrDay(-1),
    "next week": incrDay(7),
    "next month": incrMonth(1),
    "next year": incrMonth(12),
    "last week": incrDay(-7),
    "last month": incrMonth(-1),
    "last year": incrMonth(-12),
};

const getStringsIdent = (res, input) => {
    for (let [ident, value] of Object.entries(STRINGS)) {
        if (ident.startsWith(input)) {
            res.push(ident);
        }
    }
};

const getArithmetic = (res, input) => {
    if (!input.startsWith("+") && !input.startsWith("-")) return;
    if (input == "+" || input == "-") return;
    if (input == "+0" || input == "-0") {
        res.push("today");
    } else if (input == "+1") {
        res.push("tomorrow");
    } else if (input == "-1") {
        res.push("yesterday");
    } else {
        const nbStr = input.slice(1);
        try {
            const nbInt = parseInt(nbStr);
            const date = new Date();
            date.setDate(date.getDate() + nbInt);
            const value = date.toLocaleDateString();
            if (value != "Invalid Date") {
                res.push(date.toLocaleDateString());
            }
        } finally {
        }
    }
};

export const getPropositions = (input) => {
    if (!input) return [];
    var res = [];
    getStringsIdent(res, input);
    if (input.startsWith("in")) {
        input = "+" + input.slice(2);
    }
    getArithmetic(res, input);
    if (res.length == 0) return undefined;
    return res.slice(0, Math.min(res.length, 10));
};
