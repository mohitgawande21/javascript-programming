// Array Built-in Methods Examples and Documentation
// Organized by categories with practical examples

// Sample arrays for demonstrations
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'two', { three: 3 }, [4, 5]];

// 1. Array Creation Methods
const arrayCreation = {
    // Creates an array from array-like or iterable objects
    fromExample: () => {
        const fromString = Array.from('hello');          // ['h','e','l','l','o']
        const fromSet = Array.from(new Set([1,1,2,2])); // [1,2]
        const withMap = Array.from([1,2,3], x => x * 2); // [2,4,6]
        return { fromString, fromSet, withMap };
    },

    // Creates a new Array with variable number of arguments
    ofExample: () => {
        return Array.of(1, 'two', { three: 3 });        // [1, 'two', { three: 3 }]
    },

    // Creates array with given length
    constructorExample: () => {
        return new Array(3).fill('empty');              // ['empty', 'empty', 'empty']
    }
};

// 2. Array Information Methods
const arrayInfo = {
    // Check if value is an array
    isArrayExample: () => {
        return {
            numberArray: Array.isArray([1,2,3]),        // true
            string: Array.isArray('hello'),             // false
            object: Array.isArray({ key: 'value' })     // false
        };
    },

    // Get array length
    lengthExample: () => {
        return {
            normal: [1,2,3].length,                     // 3
            sparse: [1,,3].length                       // 3
        };
    }
};

// 3. Array Search Methods
const searchMethods = {
    // Get first index of element
    indexOfExample: () => {
        const arr = [1, 2, 3, 2, 1];
        return {
            firstIndex: arr.indexOf(2),            // 1
            fromIndex: arr.indexOf(2, 2),          // 3
            notFound: arr.indexOf(5)               // -1
        };
    },

    // Get last index of element
    lastIndexOfExample: () => {
        const arr = [1, 2, 3, 2, 1];
        return {
            lastIndex: arr.lastIndexOf(2),         // 3
            fromIndex: arr.lastIndexOf(2, 2),      // 1
            notFound: arr.lastIndexOf(5)           // -1
        };
    },
    // Find element in array
    findExample: () => {
        const numbers = [1, 2, 3, 4, 5];
        return {
            findNumber: numbers.find(x => x > 3),       // 4
            findEven: numbers.find(x => x % 2 === 0),   // 2
            findNone: numbers.find(x => x > 10)         // undefined
        };
    },

    // Find element index
    findIndexExample: () => {
        const fruits = ['apple', 'banana', 'orange'];
        return {
            findFruit: fruits.findIndex(f => f === 'banana'), // 1
            notFound: fruits.findIndex(f => f === 'mango')   // -1
        };
    },

    // Check if element exists
    includesExample: () => {
        return {
            hasNumber: numbers.includes(3),             // true
            hasString: fruits.includes('banana'),       // true
            notFound: mixed.includes('nothere')         // false
        };
    }
};

// 4. Array Transformation Methods
const transformMethods = {
    // Map elements to new array
    mapExample: () => {
        return {
            double: numbers.map(x => x * 2),            // [2,4,6,8,10]
            toObject: fruits.map(f => ({ name: f }))    // [{name:'apple'}, ...]
        };
    },

    // Filter elements
    filterExample: () => {
        return {
            evenNumbers: numbers.filter(x => x % 2 === 0), // [2,4]
            longNames: fruits.filter(f => f.length > 5)    // ['banana', 'orange']
        };
    },

    // Reduce array to single value
    reduceExample: () => {
        return {
            sum: numbers.reduce((sum, n) => sum + n, 0),    // 15
            concat: fruits.reduce((str, f) => str + f, '')  // 'applebananaorange'
        };
    }
};

// 5. Array Modification Methods
const modificationMethods = {
    // Add/remove elements (returns new array)
    sliceExample: () => {
        return {
            subset: numbers.slice(1, 3),                // [2,3]
            fromIndex: numbers.slice(2),                // [3,4,5]
            negative: numbers.slice(-2)                 // [4,5]
        };
    },

    // Modify array in place
    spliceExample: () => {
        const arr = [...numbers];
        const removed = arr.splice(1, 2, 'a', 'b');
        return { modified: arr, removed };              // { modified: [1,'a','b',4,5], removed: [2,3] }
    },

    // Combine arrays
    concatExample: () => {
        return {
            twoArrays: numbers.concat(fruits),          // [1,2,3,4,5,'apple','banana','orange']
            multipleArrays: [0].concat(numbers, fruits) // [0,1,2,3,4,5,'apple','banana','orange']
        };
    }
};

// 6. Array Order Methods
const orderMethods = {
    // Reverse array
    reverseExample: () => {
        const arr = [...numbers];
        return {
            inPlace: arr.reverse(),                     // [5,4,3,2,1]
            nonMutating: [...numbers].reverse()         // [5,4,3,2,1] (original preserved)
        };
    },

    // Sort array
    sortExample: () => {
        const nums = [3, 1, 4, 1, 5];
        return {
            simple: [...fruits].sort(),                 // alphabetical
            numeric: [...nums].sort((a, b) => a - b),   // numerical
            custom: [...fruits].sort((a, b) => b.length - a.length) // by length
        };
    }
};

// 7. Array Iteration Methods
const iterationMethods = {
    // Execute function for each element
    forEachExample: () => {
        const result = [];
        numbers.forEach(n => result.push(n * 2));
        return result;                                  // [2,4,6,8,10]
    },

    // Check all elements
    everyExample: () => {
        return {
            allPositive: numbers.every(n => n > 0),     // true
            allEven: numbers.every(n => n % 2 === 0)    // false
        };
    },

    // Check any elements
    someExample: () => {
        return {
            hasEven: numbers.some(n => n % 2 === 0),    // true
            hasNegative: numbers.some(n => n < 0)       // false
        };
    }
};

// 8. Newer Array Methods (ES2022+)
const modernMethods = {
    // with - returns new array with one element replaced (ES2023)
    withExample: () => {
        return {
            withMethod: numbers.with ? numbers.with(2, 'new') : 'Not supported',  // [1,2,'new',4,5]
            traditional: [...numbers.slice(0, 2), 'new', ...numbers.slice(3)]     // same result, old way
        };
    },

    // Find last/findLastIndex - search from end (ES2023)
    findLastExample: () => {
        const nums = [1, 2, 3, 2, 1];
        return {
            findLast: nums.findLast ? nums.findLast(x => x === 2) : 'Not supported',         // 2
            findLastIndex: nums.findLastIndex ? nums.findLastIndex(x => x === 2) : 'Not supported'  // 3
        };
    },
    // Get element at index (supports negative indices)
    atExample: () => {
        return {
            fromStart: numbers.at(0),                   // 1
            fromEnd: numbers.at(-1),                    // 5
            middle: numbers.at(2)                       // 3
        };
    },

    // Non-mutating versions of mutating methods
    copyMethods: () => {
        return {
            toReversed: numbers.toReversed?.() || 'Not supported',
            toSorted: numbers.toSorted?.() || 'Not supported',
            toSpliced: numbers.toSpliced?.(1, 2, 'a') || 'Not supported'
        };
    }
};

// Export individual categories for specific use
export {
    arrayCreation,
    arrayInfo,
    searchMethods,
    transformMethods,
    modificationMethods,
    orderMethods,
    iterationMethods,
    modernMethods
};

// Main demo function that runs all examples
function demo() {
    const categories = {
        'Array Creation': arrayCreation,
        'Array Information': arrayInfo,
        'Search Methods': searchMethods,
        'Transformation Methods': transformMethods,
        'Modification Methods': modificationMethods,
        'Order Methods': orderMethods,
        'Iteration Methods': iterationMethods,
        'Modern Methods': modernMethods
    };

    console.log('=== Array Methods Demo ===\n');
    
    for (const [category, methods] of Object.entries(categories)) {
        console.log(`\n--- ${category} ---`);
        for (const [methodName, method] of Object.entries(methods)) {
            console.log(`\n${methodName}:`);
            console.log(method());
        }
    }
}

// Export the demo function as default
export default demo;
