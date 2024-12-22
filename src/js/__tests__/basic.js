import healthBar from '../app'

test.each([
    ['Маг', 50, 'healthy'],
    ['Воин', 33, 'wounded'],
    ['Лучник', 5, 'critical']
])(
    'testing function healthBar on %s with %i health points ', (_, health, expected) => {
        const result = healthBar(health)
        expect(result).toBe(expected)
    }
)