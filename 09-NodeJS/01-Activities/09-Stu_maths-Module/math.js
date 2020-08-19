var sum = function(a, b) {
    return parseInt(a) + parseInt(b);
}

var difference = function(a, b) {
    return parseInt(a) - parseInt(b);
}

var product = function(a, b) {
    return parseInt(a) * parseInt(b);
}

var quotient = function(a, b) {
    return parseInt(a) / parseInt(b);
}

module.exports = {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient
}