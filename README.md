# Mars Rover Kata Solution

This is my solution to the mars rover kata using javascript and jest unit testing

## Installation and usage

Please ensure you have installed jest using a suitable package manager like yarn or jest - this can be done locally or globally on your machine using yarn or npm

npm set up

local install: npm --save-dev jest
global install: npm install jest --global

yarn set up

local install: yarn --save-dev jest
global install: yarn global add jest

To run any function in the index file please call it and pass in appropriate arguments into the function and run it using the node command:

node index.js

To run the test file invoke your package manager and use the test script comamnd followed by the test file name e.g.

npm test index.test.js

### Summary of solution

Breaking down the problem to figure out how to best pass the test input was key.

Upon researching this - I learnt that the input needed to be handled as an array that contains string elements.

From this I then understood taking this array and transforming as required so that the direction/heading and coordinates could be seperated out and processed was needed, it then needed to be turned into an object (state) so the direcitons/heading and coordinates could be handled seperately as required in later functions.

Further once inital functions were created to handle one direction/heading and coordinatoes, an additional function was needed to handle a series of directions/headings.
This led to me realising that the previous outputs would be needed to be stored in state within the function (again an object) and then iterated on with the next direction given and update not only the direction but the coordinates given depending on the direction/heading passed into state on the previous iteration.

In addition the output of the series of commands and directions/headings would need to be returned as a string - this meant a function to process the output into a string was needed.

Also a function was needed that could split out the series of commands and directions and coordinates intitally given into a set of smaller arrays that consist of one set of commands and directions and coordinates.
This function meant that mutiple set of commands and heading and coordinates could be looped over and the output returned.

Finally a function was needed that would take these looped outputs and push them into a new array so it matched the test output given in the kata - this output would be passed to the function that turns the outputs into a string as part of the push to the array (consumed by push method).

#### Possible Additional Considerations

- Could add in 55 string (relating to the 5x5 grid of the plateau) from test input in the future but can be removed as part of code before coordinates and headings/directions are processed.
- Can update move and turn functions to throw errors if x, y coordinates exceed the value of 5 or if they return -1 as is 5x5 grid and ensure rovers stay on plateau.
- Security considerations - functions should be behind authentication and authorisation mechanisim so only authorised users can send commands to the rovers.
- Add in logic check so that both rovers do not share the same coordinates i.e. avoid a crash
