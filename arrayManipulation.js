

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}


function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);

const stringArray = ["Hello", "World", "JavaScript", "Is", "Great"];
const formattedStrings = formatArrayStrings(stringArray, processedArray);

