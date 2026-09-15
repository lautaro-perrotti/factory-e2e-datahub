import { createHash } from 'node:crypto';

export function formatInvoiceId(raw) {
  const digest = createHash('sha256')
    .update(String(raw ?? ''))
    .digest('hex')
    .slice(0, 16);
  return `inv_${digest}`;
}
