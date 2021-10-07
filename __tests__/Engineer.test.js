const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.name).toBe('John Smith');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('Jared@fakemail.com');
    expect(engineer.github).toBe('johnh');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.getName()).toBe("John Smith");
});

test("gets engineer's id", () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.getID()).toEqual(expect.stringContaining("1"));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.getEmail()).toEqual(expect.stringContaining("Jared@fakemail.com"));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.getGitHub()).toEqual(expect.stringContaining("johnh"));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('John Smith', 1, "Jared@fakemail.com", "johnh");

    expect(engineer.getRole()).toBe('Engineer');
});