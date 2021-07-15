// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { adder, subtracter, multiplier, divider} from '../utils.js'

const test = QUnit.test;

test('adder should take in 4 and 2 and return 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = adder(4, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracter should take in 8 and 3 and return 5', (expect) => {

    const expected = 5;

    const actual = subtracter(8, 3);

    expect.equal(actual, expected);
});

test('multiplier should take 3 and 7 and return 21', (expect) => {

    const expected = 21;

    const actual = multiplier(3,7);

    expect.equal(actual, expected);
})

test('divider should take 10 and 5 and return 2', (expect) => {

    const expected = 2;

    const actual = divider(10, 5);

    expect.equal(actual, expected);
})

