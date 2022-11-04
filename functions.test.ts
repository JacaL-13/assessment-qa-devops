const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray([1, 2, 3, 4, 5]))).toBe(true)
    })

    test('stay the same length', () => {
        expect(shuffleArray([1, 2, 3, 4, 5]).length).toBe(5)
    })
})