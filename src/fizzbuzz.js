class FizzStrategy {
    handle(num) {
        if (num % 3 === 0) {
            return 'fizz'
        }
        return ''
    }
}

class BuzzStrategy {
    handle(num) {
        if (num % 5 === 0) {
            return 'buzz'
        }
        return ''
    }
}

const fizzbuzz = (num) => {
    let result = '';
    const fizzStrategy = new FizzStrategy();
    result += fizzStrategy.handle(num)
    const buzzStrategy = new BuzzStrategy();
    result += buzzStrategy.handle(num);
    if (result !== '') {
        return result;
    }
    if (num % 7 === 0) {
        return "zuzz"
    }
    return String(num)
}

module.exports = {
    fizzbuzz
}