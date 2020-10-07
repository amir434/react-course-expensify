import { removeExpense } from "../actions/expenses";

const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Say my name!', () => {
    const result = generateGreeting("Amir");
    expect(result).toBe("Hello Amir!");
});

