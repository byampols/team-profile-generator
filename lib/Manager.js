const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    };
}

module.exports = Manager;