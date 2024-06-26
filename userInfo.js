// userInfo.js

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const originalNames = ["Hello", "World", "JavaScript", "Is", "Great"];
const modifiedNames = ['hello', 'WORLD', 'javascript', 'IS', 'great'];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/* Output:
[
    { id: 1, originalName: 'Hello', modifiedName: 'hello' },
    { id: 2, originalName: 'World', modifiedName: 'WORLD' },
    { id: 3, originalName: 'JavaScript', modifiedName: 'javascript' },
    { id: 4, originalName: 'Is', modifiedName: 'IS' },
    { id: 5, originalName: 'Great', modifiedName: 'great' }
]
*/
