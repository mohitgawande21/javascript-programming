// Object Built-in Methods Examples and Documentation
// Organized by usage frequency and interview importance

// Sample objects for demonstrations
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const user = {
    id: 1,
    email: 'user@example.com',
    settings: {
        theme: 'dark',
        notifications: true
    }
};

//==============================================
// SECTION 1: MOST COMMONLY USED DAILY METHODS
//==============================================

const dailyMethods = {
    // 1. Object.keys - Get array of property names (Very Common)
    keys: () => ({
        personKeys: Object.keys(person),              // Returns: ['name', 'age', 'address']
        nestedKeys: Object.keys(person.address),      // Returns: ['city', 'country']
        emptyKeys: Object.keys({})                    // Returns: []
    }),

    // 2. Object.values - Get array of values (Very Common)
    values: () => ({
        personValues: Object.values(person),          // Returns: ['John', 30, { city: 'New York', country: 'USA' }]
        settingValues: Object.values(user.settings),  // Returns: ['dark', true]
        emptyValues: Object.values({})                // Returns: []
    }),

    // 3. Object.entries - Get array of [key, value] pairs (Very Common)
    entries: () => ({
        personEntries: Object.entries(person),        // Returns: [['name', 'John'], ['age', 30], ['address', {...}]]
        flatEntries: Object.entries({ x: 1, y: 2 }),  // Returns: [['x', 1], ['y', 2]]
        emptyEntries: Object.entries({})              // Returns: []
    }),

    // 4. Property Access and Check (Very Common)
    propertyAccess: () => ({
        dotNotation: person.name,                     // Returns: 'John'
        bracketNotation: person['age'],               // Returns: 30
        hasProperty: 'name' in person,                // Returns: true
        hasOwnProperty: person.hasOwnProperty('name') // Returns: true
    }),

    // 5. Object.assign - Copy/Merge objects (Very Common)
    assign: () => {
        const target = { a: 1 };
        const source1 = { b: 2 };
        const source2 = { c: 3 };
        return {
            merged: Object.assign(target, source1, source2), // Returns: { a: 1, b: 2, c: 3 }
            target: target,                                  // Returns: { a: 1, b: 2, c: 3 } (modified!)
            spreadOperator: { ...target, ...source1 }        // Returns: { a: 1, b: 2 } (safer merge)
        };
    }
};

//==============================================
// SECTION 2: COMMON INTERVIEW QUESTIONS
//==============================================

const interviewMethods = {
    // 1. Deep Clone (Very Common Interview Question)
    deepClone: () => {
        const original = { 
            a: 1, 
            b: { c: 2 }, 
            d: [1, 2, { e: 3 }] 
        };
        return {
            jsonClone: JSON.parse(JSON.stringify(original)), // Deep clone (with limitations)
            shallowClone: { ...original },                  // Shallow clone
            structuredClone: structuredClone(original)      // Modern deep clone (if supported)
        };
    },

    // 2. Property Descriptors (Common Interview Topic)
    descriptors: () => {
        const obj = {};
        Object.defineProperty(obj, 'readOnly', {
            value: 42,
            writable: false,
            enumerable: true,
            configurable: false
        });
        return {
            descriptor: Object.getOwnPropertyDescriptor(obj, 'readOnly'),
            allDescriptors: Object.getOwnPropertyDescriptors(obj),
            tryModify: (() => {
                try {
                    obj.readOnly = 100;
                    return obj.readOnly;  // Returns: 42 (unchanged)
                } catch (e) {
                    return 'Error: ' + e.message;
                }
            })()
        };
    },

    // 3. Property Enumeration & Prototypes (Common Interview Question)
    enumeration: () => {
        const parent = { inherited: true };
        const child = Object.create(parent);
        child.own = false;
        return {
            ownKeys: Object.keys(child),              // Returns: ['own']
            allIn: (() => {
                const props = [];
                for (let prop in child) props.push(prop);
                return props;                         // Returns: ['own', 'inherited']
            })(),
            ownValues: Object.values(child),          // Returns: [false]
            ownEntries: Object.entries(child)         // Returns: [['own', false]]
        };
    }
};

//==============================================
// SECTION 3: MODERN OBJECT METHODS (ES2022+)
//==============================================

const modernMethods = {
    // 1. Object.hasOwn - Modern replacement for hasOwnProperty
    hasOwn: () => ({
        directProperty: Object.hasOwn(person, 'name'),     // Returns: true
        inherited: Object.hasOwn(person, 'toString'),      // Returns: false
        nullCheck: Object.hasOwn(null, 'prop')            // Throws TypeError
    }),

    // 2. Object.groupBy - Group array items by property (ES2023+)
    groupBy: () => {
        const items = [
            { type: 'fruit', name: 'apple' },
            { type: 'vegetable', name: 'carrot' },
            { type: 'fruit', name: 'banana' }
        ];
        return {
            byType: Object.groupBy ? Object.groupBy(items, item => item.type) : 'Not supported'
            // Returns: { fruit: [...], vegetable: [...] }
        };
    },

    // 3. Object.fromEntries - Convert entries back to object
    fromEntries: () => {
        const entries = [['name', 'John'], ['age', 30]];
        return {
            fromArray: Object.fromEntries(entries),        // Returns: { name: 'John', age: 30 }
            mapToObj: Object.fromEntries(new Map(entries)) // Returns: { name: 'John', age: 30 }
        };
    }
};

//==============================================
// SECTION 4: UTILITY & SPECIALIZED METHODS
//==============================================

const utilityMethods = {
    // 1. Object Creation and Prototypes
    creation: () => ({
        literal: { x: 1 },                           // Basic object literal
        constructor: new Object({ x: 1 }),           // Using constructor
        create: Object.create(null),                 // No prototype
        createWithProto: Object.create({ x: 1 })     // With prototype
    }),

    // 2. Property Definition
    defineProps: () => {
        const obj = {};
        Object.defineProperties(obj, {
            readOnly: {
                value: 42,
                writable: false
            },
            computed: {
                get() { return this._value; },
                set(v) { this._value = v; }
            }
        });
        return obj;
    },

    // 3. Object State & Protection
    protection: () => ({
        frozen: Object.freeze({ x: 1 }),             // Cannot modify
        sealed: Object.seal({ x: 1 }),              // Cannot add/delete
        nonExtensible: Object.preventExtensions({ x: 1 }) // Cannot add
    }),

    // 4. Object Analysis
    analysis: () => ({
        isFrozen: Object.isFrozen({ x: 1 }),        // Returns: false
        isSealed: Object.isSealed({ x: 1 }),        // Returns: false
        isExtensible: Object.isExtensible({ x: 1 })  // Returns: true
    })
};

// Export categories based on usage priority
export {
    dailyMethods,      // Most commonly used methods
    interviewMethods,  // Common interview questions
    modernMethods,     // ES2022+ features
    utilityMethods    // Specialized operations
};

// Main demo function that runs all examples
function objectExamples() {
    const categories = {
        'Daily Methods': dailyMethods,
        'Interview Methods': interviewMethods,
        'Modern Methods': modernMethods,
        'Utility Methods': utilityMethods
    };

    console.log('=== Object Methods Demo ===\n');
    
    for (const [category, methods] of Object.entries(categories)) {
        console.log(`\n--- ${category} ---`);
        for (const [methodName, method] of Object.entries(methods)) {
            console.log(`\n${methodName}:`);
            try {
                console.log(method());
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }
    }
}

// Export the demo function as default
export default objectExamples;