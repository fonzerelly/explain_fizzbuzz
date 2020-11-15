class FizzBuzzStrategyTemplate {
    constructor(divisor, representative) {
        this.divisor = divisor
        this.representative = representative
    }

    handle(num) {
        if (num % this.divisor === 0) {
            return this.representative;
        }
        return ''
    }
}
class FizzBuzzStrategyFactory {
    create(divisor, representative) {
        return new FizzBuzzStrategyTemplate (divisor, representative)
    }
}


const fizzbuzz = (num) => {
    const factory = new FizzBuzzStrategyFactory();
    let result = '';
    const fizzStrategy = factory.create(3, 'fizz');
    result += fizzStrategy.handle(num)
    const buzzStrategy = factory.create(5, 'buzz');
    result += buzzStrategy.handle(num);
    const zuzzStrategy = factory.create(7, 'zuzz');
    result += zuzzStrategy.handle(num);
    if (result !== '') {
        return result;
    }
    return String(num)
}

module.exports = {
    fizzbuzz
}