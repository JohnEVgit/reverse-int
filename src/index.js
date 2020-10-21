module.exports = function reverse(n) {
    let nString = n.toString();

    if (n < 0) {
        nString = nString.slice(1);
    }

    return +(nString.split('').reverse().join(''));
};
