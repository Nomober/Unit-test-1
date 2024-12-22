import status from 'statuses'
import healthBar from '../app'

test.each([
    ['Маг', 50],
    ['Воин', 33],
    ['Лучник', 5]
])
(
    'testing function healthBar on %s with %i health points ', (_, health) => {
        const result = healthBar(health)
    }
)