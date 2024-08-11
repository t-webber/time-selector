import { incrDay, incrMonth } from "./dates.js";
import { getArithmetic } from "./arithmetic.js";
import { convertStringInput } from "./input.js";

const STRINGS = {
    today: { text: "Today", date: new Date() },
    now: { text: "Today", date: new Date() },
    tomorrow: { text: "Tomorrow", date: incrDay(1) },
    morrow: { text: "Tomorrow", date: incrDay(1) },
    yesterday: { text: "Yesterday", date: incrDay(-1) },
    nextweek: { text: "Next week", date: incrDay(7) },
    nextmonth: { text: "Next month", date: incrMonth(1) },
    nextyear: { text: "Next year", date: incrMonth(12) },
    lastweek: { text: "Last week", date: incrDay(-7) },
    lastmonth: { text: "Last month", date: incrMonth(-1) },
    lastyear: { text: "Last year", date: incrMonth(-12) },
    nextday: { text: "Tomorrow", date: incrDay(1) },
    lastday: { text: "Yesterday", date: incrDay(-1) },
};

const getStringsIdent = (res, input) => {
    // console.log("[STRINGS INPUT]", JSON.stringify(input));
    for (const [ident, value] of Object.entries(STRINGS)) {
        for (const word of input) {
            if (ident.startsWith(word)) {
                res.push(value);
            }
        }
    }
};

export const getPropositions = (input) => {
    input = convertStringInput(input);
    // console.log("[CONVERTED INPUT]", input);
    if (!input) return [];
    var res = [];
    getStringsIdent(
        res,
        input
            .replace(/[^a-z]/g, " ")
            .split(" ")
            .filter((word) => !!+word)
    );
    // console.log("[STRING PROPS] ", JSON.stringify(res));
    getArithmetic(res, input.replace(/\s/g, ""));
    if (res.length == 0) return undefined;
    var uniqueRes = [];
    var keys = [];
    for (const elt of res) {
        if (!keys.includes(elt.text)) {
            keys.push(elt.text);
            uniqueRes.push(elt);
        }
    }
    return uniqueRes.slice(0, Math.min(uniqueRes.length, 10));
};
