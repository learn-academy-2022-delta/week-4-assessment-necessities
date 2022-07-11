// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// I'll create a jest test looking at a function called removeAndShuffle, it will expect to see a string remove the first item and shuffle the rest






const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



    // describe ("removeAndShuffle", () => {
    //     it(" takes an array, removes the first item, and returns the rest randomized", () => {
    //         expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    //     }
    //      )
    // })



// b) Create the function that makes the test pass.


// Now i have to declare the function, it will take one array input, remove the value at index 0 and randomize the order of the other values


        // const removeAndShuffle = (arrayInput) => {
        //     arrayInput.shift()
        //     for (var i = arrayInput.length - 1; i > 0; i--) {
        //         var j = Math.floor(Math.random() * (i + 1));
        //         var temp = arrayInput[i];
        //         arrayInput[i] = arrayInput[j];
        //         arrayInput[j] = temp; 
        //     }

        //     return arrayInput

        // } 

        // removeAndShuffle(colors1)




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.


// I am going to create a test that looks at a function call returnArrayMinMax, it wll return an array containg the minumum number and maximum number

        // describe ("returnArrayMinMax", () => {
        //     it("takes in an array and returns an array containing the least and max value", () => {
        //         expect(returnArrayMinMax(nums1)).toEqual([-8, 90])
        //     })
        // })


// test failed because function not defined, going to create a function now that takes in the array, takes the maximum value and the minimum value and returns a new array containing them

        // const returnArrayMinMax = ( arrayInput) => {
        //     var largeNum = arrayInput[0]
        //     var smallNum = arrayInput[0]

        //     for (var i = 1; i < arrayInput.length; i++) {

        //         if (arrayInput[i] > largeNum) {
        //             largeNum = arrayInput[i]
        //         } 
        //     }

        //     for (var i = 1; i < arrayInput.length; i++) {

        //         if (arrayInput[i] < smallNum) {
        //             smallNum = arrayInput[i]
        //         } 
        //     }

        //     returnArray = []

        //     returnArray.push(smallNum)
        //     returnArray.push(largeNum)
        //     return returnArray

        // }

        // returnArrayMinMax(nums1)



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.




// I am going to make a test for a function called removeDuplicates; it expect the function to take in two arrays and return one array with no duplicates

describe ("removeDuplicates", () => {
    it(" takes in two arrays and returns one with no duplicates", () => {
        expect(removeDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// I got the function not defined error, now i will create the function, it will use one method to join the both arrays into one and then either use a method to remove duplicates or use .filter to remove any duplicates

// I looked it up and you can use a set operator to automatically remove all duplicates, then you convert the value back into an array

const removeDuplicates = (input1, input2) => { 

    let returnArray1 = input1.concat(input2)
    let returnSet = [...new Set(returnArray1)]
    let returnArray2 = returnSet

    return returnArray2
}

removeDuplicates(testArray1, testArray2)


