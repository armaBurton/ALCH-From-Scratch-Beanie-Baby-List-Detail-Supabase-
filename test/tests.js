// import './example.test.js';
import { renderRankCard } from "../script/render-utils.js";

const test = QUnit.test;

const cardObj = [
    {
        place: 1,
        racer: `Fabio Quartararo`, 
        country: `France`,
        points: `287`,
        id: 1
    }
];

test('renderRankCard()', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<section class="rider-card"></section>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderRankCard(cardObj);
    console.log(actual);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderRankCard() should return DOM node with a list of racers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderRankCard(cardObj);
    // console.log(actual);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

