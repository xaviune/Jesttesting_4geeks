// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar / oneEuroIs.USD * oneEuroIs.JPY;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen / oneEuroIs.JPY * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}