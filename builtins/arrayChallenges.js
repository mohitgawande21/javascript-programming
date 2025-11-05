// Array Coding Challenges and Solutions
// Organized by problem type and difficulty

//==============================================
// SECTION 1: ARRAY TRANSFORMATION
//==============================================

const transformationChallenges = {
    // 1. Array Reversal without built-in reverse()
    reverse: {
        iterative: (arr) => {
            const result = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                result.push(arr[i]);
            }
            return result;
        },
        
        mapMethod: (arr) => {
            return arr.map((_, i) => arr[arr.length - 1 - i]);
        },
        
        reduceMethod: (arr) => {
            return arr.reduce((acc, val) => [val, ...acc], []);
        }
    },

    // 2. Remove Falsy Values
    removeFalsy: (arr) => {
        return arr.filter(Boolean);
    },

    // 3. Flatten Array
    flatten: {
        recursive: (arr) => {
            const result = [];
            const helper = (array) => {
                for (let i = 0; i < array.length; i++) {
                    if (Array.isArray(array[i])) {
                        helper(array[i]);
                    } else {
                        result.push(array[i]);
                    }
                }
            };
            helper(arr);
            return result;
        },
        
        reduceMethod: (arr) => {
            return arr.reduce((acc, item) => {
                return acc.concat(Array.isArray(item) ? 
                    transformationChallenges.flatten.reduceMethod(item) : item);
            }, []);
        }
    },

    // 4. Chunk Array
    chunk: {
        iterative: (arr, size) => {
            const result = [];
            for (let i = 0; i < arr.length; i += size) {
                result.push(arr.slice(i, i + size));
            }
            return result;
        },
        
        reduceMethod: (arr, size) => {
            return arr.reduce((acc, _, i) => {
                if (i % size === 0) {
                    acc.push(arr.slice(i, i + size));
                }
                return acc;
            }, []);
        }
    }
};

//==============================================
// SECTION 2: ARRAY DEDUPLICATION & COMPARISON
//==============================================

const deduplicationChallenges = {
    // Count element frequencies
    countFrequencies: {
        withReduce: (arr) => {
            return arr.reduce((acc, item) => {
                acc[item] = (acc[item] || 0) + 1;
                return acc;
            }, {});
        },
        
        withMap: (arr) => {
            const countMap = new Map();
            for (const item of arr) {
                countMap.set(item, (countMap.get(item) || 0) + 1);
            }
            return countMap;
        }
    },

    // Simple array equality check
    areArraysEqual: (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((item, index) => item === arr2[index]);
    },
    // 1. Remove Duplicates
    removeDuplicates: {
        withSet: (arr) => [...new Set(arr)],
        
        withFilter: (arr) => {
            return arr.filter((item, index) => arr.indexOf(item) === index);
        },
        
        withLoop: (arr) => {
            const result = [];
            for (const item of arr) {
                if (!result.includes(item)) {
                    result.push(item);
                }
            }
            return result;
        }
    },

    // 2. Array Intersection
    intersection: {
        withSet: (arr1, arr2) => {
            const set2 = new Set(arr2);
            return [...new Set(arr1.filter(item => set2.has(item)))];
        },
        
        withLoop: (arr1, arr2) => {
            return [...new Set(arr1.filter(item => arr2.includes(item)))];
        }
    },

    // 3. Array Union
    union: {
        withSet: (arr1, arr2) => [...new Set([...arr1, ...arr2])],
        
        withLoop: (arr1, arr2) => {
            const result = [];
            for (const item of [...arr1, ...arr2]) {
                if (!result.includes(item)) {
                    result.push(item);
                }
            }
            return result;
        }
    },

    // 4. Deep Equal
    deepEqual: (a, b) => {
        if (a === b) return true;
        if (typeof a !== typeof b) return false;
        
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            return a.every((item, i) => deduplicationChallenges.deepEqual(item, b[i]));
        }
        
        if (typeof a === 'object' && a !== null && b !== null) {
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            if (keysA.length !== keysB.length) return false;
            return keysA.every(key => 
                b.hasOwnProperty(key) && 
                deduplicationChallenges.deepEqual(a[key], b[key])
            );
        }
        
        return false;
    }
};

//==============================================
// SECTION 3: ARRAY ROTATION & POSITIONING
//==============================================

const rotationChallenges = {
    // 1. Rotate Left
    rotateLeft: (arr, k) => {
        if (!Array.isArray(arr)) return [];
        k = k % arr.length;
        return [...arr.slice(k), ...arr.slice(0, k)];
    },

    // 2. Rotate Right
    rotateRight: (arr, k) => {
        if (!Array.isArray(arr)) return [];
        k = k % arr.length;
        return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
    },

    // 3. Second Largest
    findSecondLargest: (arr) => {
        const sorted = [...new Set(arr)].sort((a, b) => b - a);
        return sorted[1] ?? null;
    }
};

//==============================================
// SECTION 4: CUSTOM ARRAY METHODS
//==============================================

const customArrayMethods = {
    // 1. Custom Map
    customMap: function(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Object.hasOwn(arr, i)) {
                result.push(callback(arr[i], i, arr));
            }
        }
        return result;
    },

    // 2. Custom Filter
    customFilter: function(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Object.hasOwn(arr, i) && callback(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
};

//==============================================
// SECTION 5: ADVANCED ARRAY OPERATIONS
//==============================================

const advancedOperations = {
    // 1. Longest Increasing Subsequence
    findLIS: (arr) => {
        const dp = Array(arr.length).fill(1);
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[i] > arr[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        return Math.max(...dp);
    },

    // 2. Even/Odd Partition
    partition: {
        withReduce: (arr) => {
            return arr.reduce((acc, num) => {
                acc[num % 2 === 0 ? 'even' : 'odd'].push(num);
                return acc;
            }, { even: [], odd: [] });
        },
        
        withFilter: (arr) => ({
            even: arr.filter(num => num % 2 === 0),
            odd: arr.filter(num => num % 2 !== 0)
        })
    },

    // 3. Most Common Element Frequency
    mostCommonFrequency: (arr) => {
        return arr.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
    },

    // 4. Remove All Occurrences
    removeOccurrences: {
        immutable: (arr, val) => arr.filter(item => item !== val),
        
        mutable: (arr, val) => {
            let i = 0;
            while (i < arr.length) {
                if (arr[i] === val) {
                    arr.splice(i, 1);
                } else {
                    i++;
                }
            }
            return arr;
        }
    },

    // 5. Flatten 2D Array
    flatten2D: {
        iterative: (matrix) => {
            const result = [];
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    result.push(matrix[i][j]);
                }
            }
            return result;
        },
        
        reduce: (matrix) => matrix.reduce((acc, row) => acc.concat(row), []),
        
        spread: (matrix) => [].concat(...matrix),
        
        flat: (matrix) => matrix.flat()
    }
};

// Export all challenge categories
export {
    transformationChallenges,
    deduplicationChallenges,
    rotationChallenges,
    customArrayMethods,
    advancedOperations
};

// Example usage function
function runArrayChallenges() {
    // Sample arrays for testing
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    const nested = [1, [2, [3, 4]], 5];
    const matrix = [[1, 2], [3, 4], [5, 6]];

    console.log('=== Array Challenges Demo ===\n');

    // Test transformation challenges
    console.log('1. Array Reversal:', transformationChallenges.reverse.iterative(arr1));
    console.log('2. Flatten Array:', transformationChallenges.flatten.recursive(nested));
    
    // Test deduplication and comparison
    console.log('3. Array Union:', deduplicationChallenges.union.withSet(arr1, arr2));
    console.log('4. Array Intersection:', deduplicationChallenges.intersection.withSet(arr1, arr2));
    console.log('5. Element Frequencies:', deduplicationChallenges.countFrequencies.withReduce([1,2,2,3,3,3]));
    console.log('6. Arrays Equal:', deduplicationChallenges.areArraysEqual(arr1, [...arr1]));
    
    // Test rotations
    console.log('5. Rotate Left:', rotationChallenges.rotateLeft(arr1, 2));
    
    // Test custom methods
    console.log('6. Custom Map:', customArrayMethods.customMap(arr1, x => x * 2));
    
    // Test advanced operations
    console.log('7. Even/Odd Partition:', advancedOperations.partition.withReduce(arr1));
    console.log('8. Flatten 2D:', advancedOperations.flatten2D.reduce(matrix));
}

// Export the demo function
export default runArrayChallenges;