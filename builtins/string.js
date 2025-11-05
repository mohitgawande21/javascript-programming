// String Built-in Methods Examples and Documentation
// Organized by usage frequency and interview importance

// Test strings for examples
const str = 'Hello, World!';
const multiline = `Line 1
Line 2
Line 3`;
const mixed = 'abc123!@#';

//==============================================
// SECTION 1: MOST COMMONLY USED DAILY METHODS
//==============================================

const dailyMethods = {
    // 1. String Length - Used in validation, loops, conditions
    length: () => ({
        basicLength: 'hello'.length,               // 5
        emptyLength: ''.length,                    // 0
        withSpaces: '  hi  '.length                // 6
    }),

    // 2. Case Conversion - Used in searches, comparisons
    case: () => ({
        toLowerCase: 'Hello'.toLowerCase(),         // "hello"
        toUpperCase: 'hello'.toUpperCase(),        // "HELLO"
        realExample: 'User@Email.com'.toLowerCase() // "user@email.com"
    }),

    // 3. Trim - Used in form inputs, data cleaning
    trim: () => {
        const input = '   user input   ';
        return {
            trim: input.trim(),                    // "user input"
            trimStart: input.trimStart(),          // "user input   "
            trimEnd: input.trimEnd()               // "   user input"
        };
    },

    // 4. Substring/Slice - Used for text extraction
    extract: () => ({
        slice: 'hello world'.slice(0, 5),         // "hello"
        substring: 'hello world'.substring(6),     // "world"
        negativeSlice: 'hello'.slice(-2)          // "lo"
    }),

    // 5. Split/Join - Used for data processing
    splitJoin: () => ({
        splitWords: 'hello world'.split(' '),     // ["hello", "world"]
        splitCSV: 'a,b,c'.split(','),            // ["a", "b", "c"]
        joinArray: ['hello', 'world'].join(' '),  // "hello world"
    }),

    // 6. includes/indexOf - Used for searching
    search: () => ({
        includes: 'hello world'.includes('world'), // true
        indexOf: 'hello world'.indexOf('o'),      // 4
        lastIndexOf: 'hello'.lastIndexOf('l')     // 3
    }),

    // 7. Replace - Used for text manipulation
    replace: () => ({
        replace: 'hello hello'.replace('hello', 'hi'),     // "hi hello"
        replaceAll: 'hello hello'.replaceAll('hello', 'hi'), // "hi hi"
        replaceRegex: 'hello'.replace(/l/g, 'L')          // "heLLo"
    })
};

//==============================================
// SECTION 2: COMMON INTERVIEW QUESTIONS
//==============================================

const interviewMethods = {
    // 1. String Reversal (Very Common)
    reverseString: () => ({
        // Method 1: Using array methods
        usingArrayMethods: 'hello'.split('').reverse().join(''),
        // Method 2: Using spread operator
        usingSpread: [...'hello'].reverse().join(''),
        // Method 3: Using reduce (functional approach)
        usingReduce: [...'hello'].reduce((acc, char) => char + acc, '')
    }),

    // 2. Palindrome Check (Common)
    palindromeCheck: () => {
        const isPalindrome = str => {
            const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
            return cleaned === [...cleaned].reverse().join('');
        };
        return {
            simple: isPalindrome('radar'),         // true
            withSpaces: isPalindrome('A man a plan a canal Panama'), // true
            notPalindrome: isPalindrome('hello')   // false
        };
    },

    // 3. Count Character Occurrences (Common)
    charCount: () => {
        // Method 1: Using reduce
        const str = 'hello world';
        return {
            usingReduce: [...str].reduce((acc, char) => {
                acc[char] = (acc[char] || 0) + 1;
                return acc;
            }, {}),
            // Method 2: Using regex
            countSpecific: (str.match(/l/g) || []).length
        };
    },

    // 4. Substring vs Slice (Common Interview Question)
    substringVsSlice: () => ({
        // Key differences
        negativeSubstring: 'hello'.substring(-3),    // "hello" (treats negative as 0)
        negativeSlice: 'hello'.slice(-3),           // "llo" (counts from end)
        reorderArgs: 'hello'.substring(3, 1),       // "el" (reorders arguments)
        sliceOrder: 'hello'.slice(3, 1)             // "" (keeps order)
    }),

    // 5. Case Insensitive Search (Common)
    caseInsensitiveSearch: () => ({
        // Different approaches
        toLowerCase: 'Hello World'.toLowerCase().includes('world'),
        regex: /world/i.test('Hello World'),
        localeCompare: 'hello'.localeCompare('HELLO', undefined, { sensitivity: 'base' }) === 0
    })
};

//==============================================
// SECTION 3: MODERN FEATURES & UTILITIES
//==============================================

const modernMethods = {
    // 1. Template Literals
    template: () => {
        const name = 'World';
        const age = 25;
        return {
            simple: `Hello ${name}!`,
            multiline: `Line 1
Line 2`,
            expression: `Age next year: ${age + 1}`
        };
    },

    // 2. Padding Methods
    padding: () => ({
        padStart: '5'.padStart(3, '0'),     // "005"
        padEnd: '5'.padEnd(3, '0'),         // "500"
        padBoth: 'hi'.padStart(4).padEnd(6) // "  hi  "
    }),

    // 3. Raw Strings
    raw: () => ({
        raw: String.raw`C:\Users\new`,     // Backslashes preserved
        normal: `C:\Users\new`              // Backslashes interpreted
    })
};

//==============================================
// SECTION 4: ADVANCED & SPECIALIZED METHODS
//==============================================

const advancedMethods = {
    // 1. Unicode & Internationalization
    unicode: () => ({
        fromCharCode: String.fromCharCode(65),   // "A"
        fromCodePoint: String.fromCodePoint(128516), // "😄"
        normalize: 'é'.normalize('NFD'),         // "e" + combining accent
        codePointAt: '😄'.codePointAt(0)        // 128516
    }),

    // 2. Regular Expressions
    regex: () => {
        const text = 'hello 123 world';
        return {
            match: text.match(/\d+/),            // ["123"]
            matchAll: [...text.matchAll(/\w+/g)], // [["hello"],["123"],["world"]]
            search: text.search(/\d+/),          // 6
            test: /\d+/.test(text)               // true
        };
    }
};

// Export all method categories
export {
    dailyMethods,      // Most frequent daily use
    interviewMethods,  // Common interview questions
    modernMethods,     // ES6+ features
    advancedMethods    // Specialized use cases
};

// Main demo function
function stringExamples() {
    const categories = {
        'Daily Methods': dailyMethods,
        'Interview Methods': interviewMethods,
        'Modern Features': modernMethods,
        'Advanced Methods': advancedMethods
    };

    console.log('=== JavaScript String Methods Demo ===\n');
    
    for (const [category, methods] of Object.entries(categories)) {
        console.log(`\n=== ${category} ===`);
        for (const [methodName, method] of Object.entries(methods)) {
            console.log(`\n${methodName}:`);
            console.log(method());
        }
    }
}

export default stringExamples;
