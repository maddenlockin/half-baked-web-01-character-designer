// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
