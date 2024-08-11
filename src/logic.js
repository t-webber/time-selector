const TODAY = "today";
const TOMORROW = "today";
const YESTERADAY = "yesterday";
const STRINGS = [TODAY, TOMORROW, YESTERADAY];

const getStringsIdent = (res, input) => {
    for (let ident of STRINGS) {
        if (ident.startsWith(input)) {
            res.push(ident);
        }
    }
};

const getArithmetic = (res, input) => {
    if (!input.startsWith("+") && !input.startsWith("-")) return;
    if (input == "+0" || input == "-0") {
        res.push(TODAY);
    } else if (input == "+1") {
        res.push(TOMORROW);
    } else if (input == "-1") {
        res.push(YESTERADAY);
    } else {
        const nbStr = input.slice(1);
        try {
            const nbInt = parseInt(nbStr);
            const today = new Date();
            today.setDate(today.getDate + nbInt);
            res.push(today.toLocaleDateString());
        } finally {
        }
    }
};

const getAllPropositions = (input) => {
    var res = [];
    getStringsIdent;
};

export const getPropositions = (input) => {
    var res = [];
    for (let i = 0; i < input.length; i++) {
        res.push("Hello World");
    }
    return res;
};
