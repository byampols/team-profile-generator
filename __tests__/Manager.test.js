const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('Jared@fakemail.com');
    expect(manager.officeNumber).toBe(308);
});

test("gets manager's name", () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.getName()).toBe("John Smith");
});

test("gets manager's id", () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.getID()).toEqual(expect.stringContaining("1"));
});

test("gets manager's email", () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.getEmail()).toEqual(expect.stringContaining("Jared@fakemail.com"));
});

test("gets manager's officeNumber", () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("308"));
});

test("gets manager's role", () => {
    const manager = new Manager('John Smith', 1, "Jared@fakemail.com", 308);

    expect(manager.getRole()).toBe('Manager');
});