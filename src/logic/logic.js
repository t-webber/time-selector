import { incrDay, incrMonth } from "./dates.js";

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
    console.log(JSON.stringify(Object.entries(STRINGS)));
    for (let [ident, value] of Object.entries(STRINGS)) {
        if (ident.startsWith(input)) {
            res.push({
                date: value,
                text: ident[0].toUpperCase() + ident.slice(1),
            });
        }
    }
};

const getArithmetic = (res, input) => {
    if (!input.startsWith("+") && !input.startsWith("-")) return;
    if (input == "+" || input == "-") return;
    if (input == "+0" || input == "-0" || input == "0") {
        res.push({ text: "Today", date: new Date() });
    } else if (input == "+1") {
        res.push({ text: "Tomorrow", date: incrDay(1) });
    } else if (input == "-1") {
        res.push({ text: "Yesterday", date: incrDay(-1) });
    } else {
        const nbStr = input.slice(1);
        try {
            const nbInt = parseInt(nbStr);
            if (Number.isInteger(nbInt)) {
                res.push({ date: incrDay(nbInt), text: `In ${nbInt} days` });
                res.push({
                    date: incrDay(7 * nbInt),
                    text: `In ${nbInt} weeks`,
                });
                res.push({
                    date: incrMonth(nbInt),
                    text: `In ${nbInt} months`,
                });
                res.push({
                    date: incrMonth(12 * nbInt),
                    text: `In ${nbInt} years`,
                });
            }
        } finally {
        }
    }
};

export const getPropositions = (input) => {
    input = input.trim();
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
