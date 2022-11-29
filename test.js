test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("120 bucks should be 12790 yens", function(){
    const { fromDollarToYen } = require ('./app.js')
    const yens = fromDollarToYen(120)
    const expected = 120 / 1.2 * 127.9;
});
test("10.000 yens should be 62.54 pounds", function(){
    const { fromYenToPound } = require ('./app.js')
    const pounds = fromYenToPound(10000)
    const expected = 10000 / 127.9 * 0.8;
})
