const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.name).toBe('John Smith');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('Jared@fakemail.com');
    expect(intern.school).toBe('University University');
});

test("gets intern's name", () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.getName()).toBe("John Smith");
});

test("gets intern's id", () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.getID()).toEqual(expect.stringContaining("1"));
});

test("gets intern's email", () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.getEmail()).toEqual(expect.stringContaining("Jared@fakemail.com"));
});

test("gets intern's school", () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.getSchool()).toEqual(expect.stringContaining("University University"));
});

test("gets intern's role", () => {
    const intern = new Intern('John Smith', 1, "Jared@fakemail.com", "University University");

    expect(intern.getRole()).toBe('Intern');
});