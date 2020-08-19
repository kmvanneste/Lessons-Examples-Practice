function Algo() {}

Algo.prototype.reverse = function(str) {
    const strArr = str.split("");
    const reversedArr = strArr.reverse();
    const reversedStr = reversedArr.join();
    return reversedStr;

    //or
    // return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
    const reversed = this.reverse(str);

    return str === reversed;
};

Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
