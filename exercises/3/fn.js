module.exports = function fn(input) {
    if (!Array.isArray(input) && typeof input != "string") {
        return null;
    }

    if (typeof input == "string") {
        let reversed = input.split("").reverse().join("");
        return reversed;
    }

    if (Array.isArray(input)) {
        let newArr = [];

        input.forEach(el => {
            if (typeof el == "string") {
                newArr.push(el.split("").reverse().join(""));
            } else {
                newArr.push(null);
            }
        });
        return newArr;
    }
};
