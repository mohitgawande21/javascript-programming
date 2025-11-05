// Array Built-in Methods Examples and Documentation
// Organized by usage frequency and interview importance

// Sample arrays for demonstrations
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'two', { three: 3 }, [4, 5]];

//==============================================
// SECTION 1: MOST COMMONLY USED DAILY METHODS
//==============================================

const dailyMethods = {
    // 1. push/pop - Adding/removing elements (Very Common)
    pushPop: () => {
        const arr = [...numbers];
        return {
            push: arr.push(6),                    // Returns: 6 (new length)
            currentArray: arr,                    // Returns: [1,2,3,4,5,6]
            pop: arr.pop(),                       // Returns: 6 (removed element)
            afterPop: arr                         // Returns: [1,2,3,4,5]
        };
    },

    // 2. map - Transform elements (Very Common)
    map: () => ({
        double: numbers.map(x => x * 2),    // Returns: [2,4,6,8,10]
        addPrefix: fruits.map(f => `fresh ${f}`), // Returns: ['fresh apple', 'fresh banana', 'fresh orange']
        toObjects: numbers.map(n => ({ value: n })) // Returns: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
    }),

    // 3. filter - Select elements (Very Common)
    filter: () => ({
        evenNumbers: numbers.filter(x => x % 2 === 0), // Returns: [2, 4]
        longWords: fruits.filter(f => f.length > 5),   // Returns: ['banana', 'orange']
        positive: [-2, -1, 0, 1, 2].filter(x => x > 0) // Returns: [1, 2]
    }),

    // 4. find/includes - Search elements (Very Common)
    search: () => ({
        findFirst: numbers.find(x => x > 3),     // Returns: 4
        includes: numbers.includes(3),            // Returns: true
        findIndex: fruits.indexOf('banana')       // Returns: 1 (index of 'banana')
    }),

    // 5. forEach - Iterate elements (Very Common)
    forEach: () => {
        let sum = 0;
        numbers.forEach(n => sum += n);
        return { sum };                          // Returns: { sum: 15 } (forEach itself returns undefined)
    },

    // 6. slice - Extract sub-array (Very Common)
    slice: () => ({
        first3: numbers.slice(0, 3),             // Returns: [1, 2, 3] (from index 0 to 2)
        last2: numbers.slice(-2),                // Returns: [4, 5] (last 2 elements)
        copy: numbers.slice()                    // Returns: [1, 2, 3, 4, 5] (creates shallow copy)
    }),

    // 7. length/indices (Very Common)
    basics: () => ({
        length: numbers.length,                  // Returns: 5 (array size)
        firstElement: numbers[0],                // Returns: 1 (first element)
        lastElement: numbers[numbers.length - 1], // Returns: 5 (last element)
        includes3: numbers.includes(3)           // Returns: true (array contains 3)
    })
};

//==============================================
// SECTION 2: COMMON INTERVIEW QUESTIONS
//==============================================

const interviewMethods = {
    // 1. Reduce - Very common in interviews
    reduce: () => ({
        sum: numbers.reduce((a, b) => a + b, 0),     // Returns: 15
        max: numbers.reduce((a, b) => Math.max(a, b)), // Returns: 5
        groupBy: fruits.reduce((acc, fruit) => {
            acc[fruit.length] = [...(acc[fruit.length] || []), fruit];
            return acc;
        }, {})                                       // Returns: { "5": ["apple"], "6": ["banana", "orange"] }
    }),

    // 2. Sort - Common interview topic
    sort: () => ({
        // Common gotcha: numbers sort as strings by default
        wrongSort: [10, 2, 1].sort(),                // Returns: [1, 10, 2] (incorrect: string comparison)
        correctSort: [10, 2, 1].sort((a, b) => a - b), // Returns: [1, 2, 10] (correct: numeric comparison)
        // Custom sort
        byLength: [...fruits].sort((a, b) => a.length - b.length) // Returns: ['apple', 'banana', 'orange'] (sorted by length)
    }),

    // 3. Mutating vs Non-mutating (Common Interview Question)
    mutations: () => {
        const original = [1, 2, 3];                  // Initial array
        // Mutating methods change the original array
        const arr1 = [...original];                  // Creates copy: [1, 2, 3]
        arr1.push(4);                               // Returns: 4 (new length), arr1 is now [1, 2, 3, 4]
        // Non-mutating methods create new arrays
        const arr2 = [...original, 4];              // Returns: [1, 2, 3, 4] (new array)
        return {
            mutated: arr1,                           // Returns: [1, 2, 3, 4] (array after mutation)
            nonMutated: arr2,                        // Returns: [1, 2, 3, 4] (new array created)
            original                                  // Returns: [1, 2, 3] (unchanged)
        };
    },

    // 4. Flattening Arrays (Common Interview Question)
    flatten: () => {
        const nested = [1, [2, 3], [4, [5, 6]]];      // Nested array example
        return {
            oneLevel: nested.flat(),                 // Returns: [1, 2, 3, 4, [5, 6]] (flattens one level)
            allLevels: nested.flat(Infinity),        // Returns: [1, 2, 3, 4, 5, 6] (flattens all levels)
            // Manual flatten (often asked in interviews)
            manual: nested.reduce((flat, item) => 
                flat.concat(Array.isArray(item) ? item : [item]), []) // Returns: [1, 2, 3, 4, [5, 6]] (one level)
        };
    },

    // 5. Array Deduplication (Common Interview Question)
    dedupe: () => {
        const duplicates = [1, 2, 2, 3, 3, 4, 5, 5];  // Array with duplicates
        return {
            usingSet: [...new Set(duplicates)],      // Returns: [1, 2, 3, 4, 5] (fastest method)
            usingFilter: duplicates.filter(          // Returns: [1, 2, 3, 4, 5] (using filter & indexOf)
                (item, index) => duplicates.indexOf(item) === index
            ),
            usingReduce: duplicates.reduce((unique, item) => // Returns: [1, 2, 3, 4, 5] (using reduce)
                unique.includes(item) ? unique : [...unique, item], []
            )
        };
    }
};

//==============================================
// SECTION 3: MODERN ARRAY METHODS (ES2022+)
//==============================================

// 1. Array Creation Methods
const arrayCreation = {
    // Creates an array from array-like or iterable objects
    fromExample: () => {
        const fromString = Array.from('hello');          // Returns: ['h', 'e', 'l', 'l', 'o'] (string to array)
        const fromSet = Array.from(new Set([1,1,2,2])); // Returns: [1, 2] (deduped array from Set)
        const withMap = Array.from([1,2,3], x => x * 2); // Returns: [2, 4, 6] (mapping during creation)
        return { fromString, fromSet, withMap };
    },

    // Creates a new Array with variable number of arguments
    ofExample: () => {
        return Array.of(1, 'two', { three: 3 });        // Returns: [1, 'two', { three: 3 }] (creates array with mixed types)
    },

    // Creates array with given length
    constructorExample: () => {
        return new Array(3).fill('empty');              // Returns: ['empty', 'empty', 'empty'] (creates fixed-length array)
    }
};

// 2. Array Information Methods
const arrayInfo = {
    // Check if value is an array
    isArrayExample: () => {
        return {
            numberArray: Array.isArray([1,2,3]),        // Returns: true (actual array)
            string: Array.isArray('hello'),             // Returns: false (string is not an array)
            object: Array.isArray({ key: 'value' })     // Returns: false (object is not an array)
        };
    },

    // Get array length
    lengthExample: () => {
        return {
            normal: [1,2,3].length,                     // Returns: 3 (length of dense array)
            sparse: [1,,3].length                       // Returns: 3 (counts empty slots too)
        };
    }
};

// 3. Array Search Methods
const searchMethods = {
    // Get first index of element
    indexOfExample: () => {
        const arr = [1, 2, 3, 2, 1];                    // Array with duplicates
        return {
            firstIndex: arr.indexOf(2),            // Returns: 1 (first occurrence of 2)
            fromIndex: arr.indexOf(2, 2),          // Returns: 3 (first 2 after index 2)
            notFound: arr.indexOf(5)               // Returns: -1 (element not found)
        };
    },

    // Get last index of element
    lastIndexOfExample: () => {
        const arr = [1, 2, 3, 2, 1];                   // Array with duplicates
        return {
            lastIndex: arr.lastIndexOf(2),         // Returns: 3 (last occurrence of 2)
            fromIndex: arr.lastIndexOf(2, 2),      // Returns: 1 (last 2 before index 2)
            notFound: arr.lastIndexOf(5)           // Returns: -1 (element not found)
        };
    },
    // Find element in array
    findExample: () => {
        const numbers = [1, 2, 3, 4, 5];                // Sample array
        return {
            findNumber: numbers.find(x => x > 3),       // Returns: 4 (first number > 3)
            findEven: numbers.find(x => x % 2 === 0),   // Returns: 2 (first even number)
            findNone: numbers.find(x => x > 10)         // Returns: undefined (no match found)
        };
    },

    // Find element index
    findIndexExample: () => {
        const fruits = ['apple', 'banana', 'orange'];   // Sample array
        return {
            findFruit: fruits.findIndex(f => f === 'banana'), // Returns: 1 (index of 'banana')
            notFound: fruits.findIndex(f => f === 'mango')   // Returns: -1 (fruit not found)
        };
    },

    // Check if element exists
    includesExample: () => {
        return {
            hasNumber: numbers.includes(3),             // Returns: true (3 is in numbers array)
            hasString: fruits.includes('banana'),       // Returns: true ('banana' is in fruits array)
            notFound: mixed.includes('nothere')         // Returns: false (value not in mixed array)
        };
    }
};

// 4. Array Transformation Methods
const transformMethods = {
    // Map elements to new array
    mapExample: () => {
        return {
            double: numbers.map(x => x * 2),            // Returns: [2, 4, 6, 8, 10] (multiply each by 2)
            toObject: fruits.map(f => ({ name: f }))    // Returns: [{name: 'apple'}, {name: 'banana'}, {name: 'orange'}]
        };
    },

    // Filter elements
    filterExample: () => {
        return {
            evenNumbers: numbers.filter(x => x % 2 === 0), // Returns: [2, 4] (only even numbers)
            longNames: fruits.filter(f => f.length > 5)    // Returns: ['banana', 'orange'] (length > 5)
        };
    },

    // Reduce array to single value
    reduceExample: () => {
        return {
            sum: numbers.reduce((sum, n) => sum + n, 0),    // Returns: 15 (sum of all numbers)
            concat: fruits.reduce((str, f) => str + f, '')  // Returns: 'applebananaorange' (joined strings)
        };
    }
};

// 5. Array Modification Methods
const modificationMethods = {
    // Add/remove elements (returns new array)
    sliceExample: () => {
        return {
            subset: numbers.slice(1, 3),                // Returns: [2, 3] (elements from index 1 to 2)
            fromIndex: numbers.slice(2),                // Returns: [3, 4, 5] (elements from index 2 to end)
            negative: numbers.slice(-2)                 // Returns: [4, 5] (last 2 elements)
        };
    },

    // Modify array in place
    spliceExample: () => {
        const arr = [...numbers];                       // Copy of [1, 2, 3, 4, 5]
        const removed = arr.splice(1, 2, 'a', 'b');    // Remove 2 elements at index 1, insert 'a', 'b'
        return { 
            modified: arr,                              // Returns: [1, 'a', 'b', 4, 5] (array after splice)
            removed                                     // Returns: [2, 3] (removed elements)
        };
    },

    // Combine arrays
    concatExample: () => {
        return {
            twoArrays: numbers.concat(fruits),          // Returns: [1, 2, 3, 4, 5, 'apple', 'banana', 'orange'] (combine 2 arrays)
            multipleArrays: [0].concat(numbers, fruits) // Returns: [0, 1, 2, 3, 4, 5, 'apple', 'banana', 'orange'] (combine 3 arrays)
        };
    }
};

// 6. Array Order Methods
const orderMethods = {
    // Reverse array
    reverseExample: () => {
        const arr = [...numbers];                       // Copy of [1, 2, 3, 4, 5]
        return {
            inPlace: arr.reverse(),                     // Returns: [5, 4, 3, 2, 1] (modifies arr)
            nonMutating: [...numbers].reverse()         // Returns: [5, 4, 3, 2, 1] (original preserved)
        };
    },

    // Sort array
    sortExample: () => {
        const nums = [3, 1, 4, 1, 5];                  // Unsorted numbers
        return {
            simple: [...fruits].sort(),                 // Returns: ['apple', 'banana', 'orange'] (alphabetical)
            numeric: [...nums].sort((a, b) => a - b),   // Returns: [1, 1, 3, 4, 5] (numerical order)
            custom: [...fruits].sort((a, b) => b.length - a.length) // Returns: ['banana', 'orange', 'apple'] (longest to shortest)
        };
    }
};

// 7. Array Iteration Methods
const iterationMethods = {
    // Execute function for each element
    forEachExample: () => {
        const result = [];
        numbers.forEach(n => result.push(n * 2));      // forEach returns undefined
        return result;                                  // Returns: [2, 4, 6, 8, 10] (doubled numbers)
    },

    // Check all elements
    everyExample: () => {
        return {
            allPositive: numbers.every(n => n > 0),     // Returns: true (all numbers > 0)
            allEven: numbers.every(n => n % 2 === 0)    // Returns: false (not all numbers are even)
        };
    },

    // Check any elements
    someExample: () => {
        return {
            hasEven: numbers.some(n => n % 2 === 0),    // Returns: true (at least one even number)
            hasNegative: numbers.some(n => n < 0)       // Returns: false (no negative numbers)
        };
    }
};

// 8. Newer Array Methods (ES2022+)
const modernMethods = {
    // Non-mutating operations (ES2023+)
    immutable: () => ({
        // All these methods return new arrays instead of modifying the original
        with: numbers.with ? numbers.with(2, 'new') : 'Not supported',     // Returns: [1, 2, 'new', 4, 5] (if supported)
        toReversed: numbers.toReversed?.() || 'Not supported',             // Returns: [5, 4, 3, 2, 1] (if supported)
        toSorted: numbers.toSorted?.() || 'Not supported',                 // Returns: [1, 2, 3, 4, 5] (if supported)
        toSpliced: numbers.toSpliced?.(1, 2, 'a') || 'Not supported'      // Returns: [1, 'a', 4, 5] (if supported)
    }),

    // Find last/findLastIndex - search from end (ES2023)
    findLastExample: () => {
        const nums = [1, 2, 3, 2, 1];                  // Array with duplicates
        return {
            findLast: nums.findLast ? nums.findLast(x => x === 2) : 'Not supported',         // Returns: 2 (last 2 in array)
            findLastIndex: nums.findLastIndex ? nums.findLastIndex(x => x === 2) : 'Not supported'  // Returns: 3 (index of last 2)
        };
    },
    // Get element at index (supports negative indices)
    atExample: () => {
        return {
            fromStart: numbers.at(0),                   // Returns: 1 (first element)
            fromEnd: numbers.at(-1),                    // Returns: 5 (last element)
            middle: numbers.at(2)                       // Returns: 3 (third element)
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

//==============================================
// SECTION 4: UTILITY & SPECIALIZED METHODS
//==============================================

const utilityMethods = {
    // Array Creation Methods
    creation: () => ({
        fromValues: Array.of(1, 2, 3),                 // Returns: [1, 2, 3] (from arguments)
        fromIterable: Array.from('123'),               // Returns: ['1', '2', '3'] (from string)
        withLength: new Array(3).fill(0)               // Returns: [0, 0, 0] (fixed length array)
    }),

    // Type Checking
    typeChecks: () => ({
        isArray: Array.isArray(numbers),               // Returns: true (numbers is an array)
        isNotArray: Array.isArray('not array'),        // Returns: false (strings aren't arrays)
        instanceof: numbers instanceof Array            // Returns: true (alternative check)
    }),

    // Advanced Operations
    advanced: () => ({
        findLast: numbers.findLast?.(x => x > 3) ?? 'Not supported',    // Returns: 5 (last number > 3) if supported
        groupBy: Object.groupBy ? Object.groupBy(fruits, fruit => fruit.length) : 'Not supported',  // Groups by string length
        at: numbers.at(-1)                            // Returns: 5 (last element using negative index)
    })
};

// Export categories based on usage priority
export {
    dailyMethods,         // Most commonly used methods
    interviewMethods,     // Common interview questions
    searchMethods,        // Search and find methods
    transformMethods,     // Data transformation methods
    modificationMethods,  // Array modification methods
    orderMethods,         // Array ordering methods
    iterationMethods,     // Array iteration methods
    arrayInfo,           // Array information methods
    modernMethods,       // ES2022+ features
    utilityMethods,      // Specialized operations
    arrayCreation         // Array creation methods
};

// Main demo function that runs all examples
function arrayExamples() {
    const categories = {
        'Daily Methods': dailyMethods,
        'Interview Methods': interviewMethods,
        'Search Methods': searchMethods,
        'Transform Methods': transformMethods,
        'Modification Methods': modificationMethods,
        'Order Methods': orderMethods,
        'Iteration Methods': iterationMethods,
        'Array Info': arrayInfo,
        'Array Creation':arrayCreation,
        'Modern Methods': modernMethods,
        'Utility Methods': utilityMethods
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
export default arrayExamples;
