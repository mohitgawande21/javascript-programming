import arrayExamples from './builtins/array.js';
import stringExamples from './builtins/string.js';
import objectExamples from './builtins/object.js';
function runApp() {
  console.log("=== JavaScript Built-in Methods===\n");
  
  console.log("\n=== Array Methods ===");
  arrayExamples();
  
  console.log("\n=== String Methods ===");
  stringExamples();

  console.log("\n=== Object Methods ===");
  objectExamples();
}

runApp();