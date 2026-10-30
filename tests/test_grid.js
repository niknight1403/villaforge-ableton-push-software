const assert = require('assert');

function testGridInitialization() {
  const grid = Array(8).fill(0).map(() => Array(8).fill(0));
  assert.strictEqual(grid.length, 8, 'Grid should have 8 rows');
  assert.strictEqual(grid[0].length, 8, 'Grid should have 8 columns');
  console.log('Test Grid Initialization: PASSED');
}

testGridInitialization();