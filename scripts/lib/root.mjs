import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// The scanner and validators are confined to this scaffold, independent of cwd.
export const root = realpathSync(fileURLToPath(new URL('../../', import.meta.url)));
