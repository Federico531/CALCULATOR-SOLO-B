const { test, expect } = require('@jest/globals')

var { substract, sum, multiply, divide } = require('./boceto.js');

test('Properly adds two numbers', () => {
    expect(
        substract(2, 1)
    ).toBe(1)
})

test('Properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})

test('Properly adds two numbers', () => {
    expect(
        multiply(6, 6)
    ).toBe(36)
})

test('Properly adds two numbers', () => {
    expect(
        divide(100, 2)
    ).toBe(50)
})