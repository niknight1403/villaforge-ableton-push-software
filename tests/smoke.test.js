import test from 'node:test';
import assert from 'node:assert';
import { PushController } from '../src/index.js';

test('Smoke test: Full user flow including initialization, pad trigger, mixer control and error handling', async () => {
  const controller = new PushController();
  assert.strictEqual(controller.initialized, true);

  // 1. Trigger pad (Normal flow)
  const padResult = controller.triggerPad(0, 0, 100);
  assert.strictEqual(padResult.success, true);
  assert.strictEqual(padResult.velocity, 100);

  // 2. Mixer control
  const mixResult = controller.setMixerVolume(1, 90);
  assert.strictEqual(mixResult.success, true);
  assert.strictEqual(mixResult.volume, 90);

  // 3. Error handling: invalid pad coordinate
  const errorResult = controller.triggerPad(10, 10, 100);
  assert.strictEqual(errorResult.success, false);
  assert.ok(errorResult.error);
});
