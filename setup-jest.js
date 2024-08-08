/** @type {import('jest')} */

// @ts-expect-error ложное срабатывание
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
