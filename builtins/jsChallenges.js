// JavaScript Challenges and Solutions
// Including algorithms, string operations, arrays, objects, and more

//==============================================
// SECTION 1: STRING OPERATIONS
//==============================================

const stringChallenges = {
    // 1. Reverse String Methods
    reverseString: {
        // Using prototype
        addReverseToPrototype: () => {
            String.prototype.reverse = function() {
                return this.split('').reverse().join('');
            };
            return "hello".reverse(); // Returns: "olleh"
        },

        // Manual reverse
        manualReverse: (str) => {
            let reversed = '';
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }
    },

    // 2. Character Code Operations
    charCodes: {
        // Get char codes
        getCharCodes: (str) => {
            return [...str].map(char => char.charCodeAt(0));
        },

        // Generate alphabet arrays
        generateAlphabet: {
            lowercase: () => {
                const arr = [];
                for (let i = 97; i <= 122; i++) {
                    arr.push(String.fromCharCode(i));
                }
                return arr;
            },
            uppercase: () => {
                const arr = [];
                for (let i = 65; i <= 90; i++) {
                    arr.push(String.fromCharCode(i));
                }
                return arr;
            }
        }
    },

    // 3. String Pattern Matching
    patterns: {
        // Filter characters
        filterChars: (str) => {
            return str.match(/[a-z]/gi)?.join('') || '';
        },

        // Remove special characters
        removeSpecialChars: (str) => {
            return str.replace(/[`~!@#$%^&*()-_+{}[\]\\|,.//?;':"]/g, '');
        },

        // Remove all non-word characters
        removeNonWord: (str) => {
            return str.replace(/\\W/g, '');
        }
    },

    // 4. Word Operations
    wordOperations: {
        // Reverse each word in string
        reverseWords: (str) => {
            return str.split(' ')
                     .map(word => word.split('').reverse().join(''))
                     .join(' ');
        },

        // Find longest word
        findLongestWord: (str) => {
            return str.split(' ')
                     .reduce((longest, current) => 
                         current.length > longest.length ? current : longest, '');
        }
    },

    // 5. String Comparison
    comparison: {
        // Check anagram
        isAnagram: (str1, str2) => {
            const normalize = str => str.toLowerCase().split('').sort().join('');
            return normalize(str1) === normalize(str2);
        },

        // Check palindrome
        isPalindrome: (str1, str2) => {
            return str1.toLowerCase() === str2.toLowerCase().split('').reverse().join('');
        },

        // Find first non-repeated character
        findFirstNonRepeated: (str) => {
            for (let i = 0; i < str.length; i++) {
                let char = str.charAt(i);
                if (str.indexOf(char) === str.lastIndexOf(char)) {
                    return char;
                }
            }
            return null;
        }
    }
};

//==============================================
// SECTION 2: NUMBER OPERATIONS
//==============================================

const numberChallenges = {
    // 1. Integer Operations
    integers: {
        // Check if number is integer
        isInteger: (num) => num % 1 === 0,

        // Sum digits until single digit
        sumDigitsUntilSingle: (num) => {
            const sumDigits = (n) => {
                let sum = 0;
                while (n > 0) {
                    sum += n % 10;
                    n = Math.floor(n / 10);
                }
                return sum;
            };
            let result = sumDigits(num);
            return result > 9 ? sumDigitsUntilSingle(result) : result;
        }
    },

    // 2. Prime Numbers
    primes: {
        isPrime: (num) => {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;
            
            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            return true;
        }
    },

    // 3. Special Number Sequences
    sequences: {
        fibonacci: {
            // Recursive (naive)
            recursive: (n) => {
                if (n <= 1) return n;
                return fibonacci(n - 1) + fibonacci(n - 2);
            },

            // With memoization
            memoized: (n, memo = {}) => {
                if (n <= 1) return n;
                if (memo[n]) return memo[n];
                memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
                return memo[n];
            }
        },

        // FizzBuzz
        fizzBuzz: () => {
            const result = [];
            for (let i = 1; i <= 100; i++) {
                const f = i % 3 === 0;
                const b = i % 5 === 0;
                result.push(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
            }
            return result;
        }
    }
};

//==============================================
// SECTION 3: OBJECT & ARRAY OPERATIONS
//==============================================

const objectArrayChallenges = {
    // 1. Object Operations
    objects: {
        // Flatten nested object
        flattenObject: (obj) => {
            const result = {};
            
            function recurse(current, path = '') {
                for (let key in current) {
                    if (typeof current[key] === 'object' && current[key] !== null) {
                        recurse(current[key], path + key + '.');
                    } else {
                        result[path + key] = current[key];
                    }
                }
            }
            
            recurse(obj);
            return result;
        },

        // Zip arrays into object
        zipArrays: (keys, values) => {
            const obj = {};
            keys.forEach((key, index) => {
                obj[key] = values[index];
            });
            return obj;
        }
    },

    // 2. Array Operations
    arrays: {
        // Move zeros to end
        moveZerosToEnd: (arr) => {
            let nonZeroIndex = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== 0) {
                    [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
                    nonZeroIndex++;
                }
            }
            return arr;
        },

        // Find missing number in sequence
        findMissing: (arr) => {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] - arr[i] > 1) {
                    return arr[i] + 1;
                }
            }
            return null;
        }
    },

    // 3. Array Transformations
    transformations: {
        // Group anagrams
        groupAnagrams: (arr) => {
            const map = new Map();
            for (let word of arr) {
                const sorted = word.split('').sort().join('');
                if (!map.has(sorted)) {
                    map.set(sorted, [word]);
                } else {
                    map.get(sorted).push(word);
                }
            }
            return Array.from(map.values());
        },

        // Remove duplicates from objects array
        uniqueObjects: (arr, key) => {
            return [...new Map(arr.map(obj => [obj[key], obj])).values()];
        }
    }
};

//==============================================
// SECTION 4: SORTING ALGORITHMS
//==============================================

const sortingAlgorithms = {
    // Quick Sort
    quickSort: (arr) => {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)];
    },

    // Bubble Sort
    bubbleSort: (arr) => {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
};

//==============================================
// SECTION 5: DATA STRUCTURES
//==============================================

const dataStructures = {
    // LinkedList Implementation
    LinkedList: class {
        constructor() {
            this.head = null;
            this.size = 0;
        }

        createNode(element) {
            return {
                element: element,
                next: null
            };
        }

        add(element) {
            if (this.head === null) {
                this.head = this.createNode(element);
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = this.createNode(element);
            }
            this.size++;
        }

        removeIndex(index) {
            if (index < 0 || index >= this.size) return;

            if (index === 0) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                let prev = null;
                let count = 0;

                while (count < index) {
                    prev = current;
                    current = current.next;
                    count++;
                }
                prev.next = current.next;
            }
            this.size--;
        }

        printList() {
            let current = this.head;
            let result = [];
            while (current) {
                result.push(current.element);
                current = current.next;
            }
            return result.join(' -> ');
        }
    }
};

//==============================================
// SECTION 6: JAVASCRIPT BEHAVIOR EXAMPLES
//==============================================

const jsBehaviorExamples = {
    // Hoisting Examples
    hoisting: {
        variableHoisting: () => {
            try {
                b = 5;
                var b; // hoisted
                return b; // Returns: 5
            } catch (e) {
                return e.message;
            }
        },

        functionHoisting: () => {
            try {
                return {
                    beforeDeclaration: hoistedFn(), // Works due to hoisting
                    afterDeclaration: hoistedFn()    // Same result
                };
                function hoistedFn() { return 'I am hoisted!'; }
            } catch (e) {
                return e.message;
            }
        }
    },

    // This Context Examples
    thisContext: {
        normalVsArrow: {
            normalFunction: function() {
                return this; // 'this' depends on how function is called
            },
            
            arrowFunction: () => {
                return this; // 'this' is lexically scoped
            }
        },

        objectMethods: {
            name: 'test',
            normal: function() { return this.name; },
            arrow: () => this.name
        }
    },

    // Eval and Scope
    evalScope: () => {
        try {
            let x = 1;
            eval('var x = 2'); // eval creates variables in current scope
            return x; // Returns: 2
        } catch (e) {
            return e.message;
        }
    },

    // Performance Testing
    performanceTesting: (fn) => {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        return {
            result,
            timeTaken: `${end - start} milliseconds`
        };
    }
};

//==============================================
// SECTION 7: ADVANCED ALGORITHMS
//==============================================

const advancedAlgorithms = {
    // Binary Search
    binarySearch: (arr, target) => {
        let low = 0;
        let high = arr.length - 1;
        
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        
        return -1;
    },

    // Two Pointers Technique
    twoPointers: {
        // Two Sum (sorted array)
        twoSum: (arr, target) => {
            let left = 0;
            let right = arr.length - 1;
            
            while (left < right) {
                const sum = arr[left] + arr[right];
                if (sum === target) return [left, right];
                if (sum < target) left++;
                else right--;
            }
            
            return [];
        },

        // Check Palindrome
        isPalindrome: (str) => {
            let left = 0;
            let right = str.length - 1;
            
            while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
            }
            
            return true;
        }
    },

    // Sliding Window
    slidingWindow: {
        // Max sum subarray of size k
        maxSubarraySum: (arr, k) => {
            let windowSum = 0;
            let maxSum = 0;
            
            // First window
            for (let i = 0; i < k; i++) {
                windowSum += arr[i];
            }
            maxSum = windowSum;
            
            // Slide window
            for (let i = k; i < arr.length; i++) {
                windowSum = windowSum - arr[i - k] + arr[i];
                maxSum = Math.max(maxSum, windowSum);
            }
            
            return maxSum;
        },

        // Longest substring without repeating characters
        longestSubstring: (str) => {
            const set = new Set();
            let left = 0;
            let maxLen = 0;
            
            for (let right = 0; right < str.length; right++) {
                while (set.has(str[right])) {
                    set.delete(str[left]);
                    left++;
                }
                set.add(str[right]);
                maxLen = Math.max(maxLen, right - left + 1);
            }
            
            return maxLen;
        }
    },

    // Stack Applications
    stack: {
        // Valid parentheses
        isValidParentheses: (s) => {
            const stack = [];
            const map = {
                ')': '(',
                '}': '{',
                ']': '['
            };
            
            for (let char of s) {
                if (['(', '[', '{'].includes(char)) {
                    stack.push(char);
                } else if (stack.pop() !== map[char]) {
                    return false;
                }
            }
            
            return stack.length === 0;
        }
    }
};

// Export all challenge categories
export {
    stringChallenges,
    numberChallenges,
    objectArrayChallenges,
    sortingAlgorithms,
    dataStructures,
    jsBehaviorExamples,
    advancedAlgorithms
};

// Example usage function
function runJSChallenges() {
    console.log('=== JavaScript Challenges Demo ===\n');

    // Test string operations
    console.log('String Reverse:', stringChallenges.reverseString.manualReverse('hello'));
    console.log('Anagram Check:', stringChallenges.comparison.isAnagram('listen', 'silent'));

    // Test number operations
    console.log('Prime Check:', numberChallenges.primes.isPrime(17));
    console.log('FizzBuzz:', numberChallenges.sequences.fizzBuzz().slice(0, 5));

    // Test array operations
    console.log('Quick Sort:', sortingAlgorithms.quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
    console.log('Binary Search:', advancedAlgorithms.binarySearch([1, 2, 3, 4, 5], 3));

    // Test advanced algorithms
    console.log('Valid Parentheses:', advancedAlgorithms.stack.isValidParentheses('({[]})'));
    console.log('Longest Substring:', advancedAlgorithms.slidingWindow.longestSubstring('abcabcbb'));

    // Test data structures
    const list = new dataStructures.LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    console.log('LinkedList:', list.printList());

    // Test JS behaviors
    console.log('Hoisting Example:', jsBehaviorExamples.hoisting.variableHoisting());
    console.log('This Context:', jsBehaviorExamples.thisContext.objectMethods.normal());
    
    // Test performance
    console.log('Performance Test:', jsBehaviorExamples.performanceTesting(() => {
        return Array(1000).fill(0).map((_, i) => i * i);
    }));
}

// Export the demo function
export default runJSChallenges;