import arrayExamples from './builtins/array.js';
import stringExamples from './builtins/string.js';

function runApp() {
  console.log("=== JavaScript Built-in Methods===\n");
  
  console.log("\n=== Array Methods ===");
  arrayExamples();
  
  console.log("\n=== String Methods ===");
  stringExamples();
}

runApp();