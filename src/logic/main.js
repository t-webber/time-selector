import { incrDay, incrMonth } from "./dates.js";
import { getArithmetic } from "./arithmetic.js";
import { convertStringInput } from "./input.js";

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

export const getPropositions = (input) => {
    input = convertStringInput(input);
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
