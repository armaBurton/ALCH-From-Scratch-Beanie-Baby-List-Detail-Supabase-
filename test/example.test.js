// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;


test('example test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderRankCard();
    console.log(actual);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
