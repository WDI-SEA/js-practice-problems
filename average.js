// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arrayOfNumbers) {

    //Check to accept only list of numbers
    if (onlyNumbers(arrayOfNumbers)) {
        let sumTotal = 0;
        if (arrayOfNumbers.length > 0) {
            for (i = 0; i < arrayOfNumbers.length; i++) {
                sumTotal += arrayOfNumbers[i]
            }
            return console.log(" The average is " + sumTotal / arrayOfNumbers.length)
        } else if (arrayOfNumbers.length === 0) {
            console.log("Cannot calculate average as the list is empty , hence returning 0 as average!");

        }

    } else {
        console.log("The list should contain only numbers !")
    }
}

average([])
average([1, 2, 3])
average([6, 7, 8])
average(['i'])

function onlyNumbers(array) {
    return array.every(element => {
        return typeof element === 'number';
    });
}