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
};

export const convertStringInput = (input) => {
    const words = input
        .reaplce("and", "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .trim()
        .split(/\s+/);
    var res = [];
    for (const word of words) {
        if (word in NUMBERS_WORDS) {
            const current = numberWords[word];
            const last = res.pop();
            const lastInt = parseInt(last);
            if (Number.isNan(lastInt)) {
                res.push(last, current);
            } else if (lastInt < current) {
                res.push(lastInt * current);
            } else {
                res.push(lastInt + current);
            }
        } else {
            res.push(word);
        }
    }
    return res.join(" ").trim();
};
