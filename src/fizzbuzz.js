const fizzbuzz = (num) => {
    if (num % 3 === 0) {
        return "fizz"
    }
    return String(num)
}

module.exports = {
    fizzbuzz
}