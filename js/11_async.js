const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
setTimeout(second, 0)
third()

// second виконується останнім тому що сторонній арі, закидає
// його в колстек уже в кінці черги для виконання, ане першим як здається
