export const cached =
// eslint-disable-next-line
  (fn: Function, cache: Map<string, any> = new Map()) =>
  // eslint-disable-next-line
  async (...payload: any[]) => {
    const cacheKey = JSON.stringify(payload)

    if (!cache.has(cacheKey)) {
      cache.set(cacheKey, fn(...payload))
    }

    try {
      return await cache.get(cacheKey)
    } catch (error) {
      cache.delete(cacheKey)
      throw error
    }
  }
