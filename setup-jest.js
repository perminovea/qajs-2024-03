/** @type {import('jest')} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
