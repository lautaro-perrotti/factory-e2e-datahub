import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatInvoiceId } from './invoice-id.js';

test('formatInvoiceId returns a non-empty inv_ id derived from input', () => {
  const id = formatInvoiceId('order-42');
  assert.equal(typeof id, 'string');
  assert.ok(id.length > 0);
  assert.ok(id.startsWith('inv_'));
  assert.notEqual(id, 'inv_1');
  assert.notEqual(id, 'inv_2');
  const other = formatInvoiceId('order-99');
  assert.notEqual(id, other);
});
