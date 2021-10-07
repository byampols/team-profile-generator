const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John Smith', 1, "Jared@fakemail.com");

    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('Jared@fakemail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John Smith', 1, "Jared@fakemail.com");

    expect(employee.getName()).toBe("John Smith");
});

test("gets employee's id", () => {
    const employee = new Employee('John Smith', 1, "Jared@fakemail.com");

    expect(employee.getID()).toEqual(expect.stringContaining("1"));
});

test("gets employee's email", () => {
    const employee = new Employee('John Smith', 1, "Jared@fakemail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining("Jared@fakemail.com"));
});

test("gets employee's role", () => {
    const employee = new Employee('John Smith', 1, "Jared@fakemail.com");

    expect(employee.getRole()).toBe('Employee');
});