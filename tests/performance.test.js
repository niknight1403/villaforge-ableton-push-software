import { PerformanceOptimizer } from '../src/optimizer.js';
import assert from 'assert';

const optimizer = new PerformanceOptimizer();

console.log('Running Performance Benchmarks...');

const start = process.hrtime.bigint();
for (let i = 0; i < 1000; i++) {
  optimizer.memoizedGridCalculation(Math.floor(i/8)%8, i%8, 100);
}
const end = process.hrtime.bigint();

const durationMs = Number(end - start) / 1_000_000;
console.log(`Benchmark completed in ${durationMs.toFixed(2)}ms`);

assert.ok(durationMs < 50, 'Performance target not met: > 50ms');
const metrics = optimizer.getMetrics();
assert.strictEqual(metrics.cacheSize, 64, 'Cache size mismatch');
console.log('Performance tests passed.');