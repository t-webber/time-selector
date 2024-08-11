const NUMBERS_WORDS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1_000,
    million: 1_000_000,
    billion: 1_000_000_000,
};

const parseAnd = (string, succ, fail) => {
    const int = parseInt(string);
    if (Number.isNaN(int)) {
        fail(string);
    } else {
        succ(int);
    }
};

export const convertStringInput = (input) => {
    if (input.startsWith("in")) {
        input = "+" + input.slice(2);
    }
    const words = input
        .toLowerCase()
        .replace(/[^a-z0-9+-]/g, " ")
        .trim()
        .split(/\s+/);
    var parsed = [];
    for (const word of words) {
        if (word in NUMBERS_WORDS) {
            const current = NUMBERS_WORDS[word];
            parseAnd(
                parsed.pop(),
                (lastInt) => {
                    if (lastInt < current) {
                        parsed.push(lastInt * current);
                    } else {
                        parsed.push(lastInt + current);
                    }
                },
                (string) => parsed.push(string, current)
            );
        } else {
            parsed.push(word);
        }
    }
    var res = [];
    for (const word of parsed) {
        parseAnd(
            word,
            (current) => {
                const last = res.pop();
                if (["and", "+"].includes(last)) {
                    parseAnd(
                        res.pop(),
                        (int) => res.push(int + current),
                        (str) => res.push(str, last, current)
                    );
                } else if (last == "-") {
                    parseAnd(
                        res.pop(),
                        (int) => res.push(int - current),
                        (str) => res.push(str, last, current)
                    );
                } else {
                    res.push(last, word);
                }
            },
            (str) => res.push(str)
        );
    }
    return res.join(" ").trim();
};
