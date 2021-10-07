const fs = require('fs');

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/index.html', fileContent, err => {
            //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(`dist/`)){
            fs.mkdirSync(`dist/`);
        }
        fs.copyFile('src/style.css' , 'dist/style.css', err => {
            //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};

const generateMembers = cardArray => {
    //objects to dynamically reference constructors and functions
    const constructors = {
        Employee: Employee,
        Engineer: Engineer,
        Intern: Intern,
        Manager: Manager
    };
    const functions = {
        Engineer: "getGitHub",
        Intern: "getSchool",
        Manager: "getOfficeNumber"
    };
    const icons = {
        Manager: `<i class="bi bi-person-circle"></i>`,
        Engineer: `<i class="bi bi-tools"></i>`,
        Intern: `<i class="bi bi-book-half"></i>`,
        Employee: `<i class="bi bi-person-fill"></i>`
    }

    //initialize string
    memberString = ``;


    cardArray.forEach(employeeObj => {
        [role, name, id, email, extra] = employeeObj;
        let employee = Boolean(extra) ? new constructors[role](name, id, email, extra) : new constructors[role](name, id, email);
        let extraHTML = ``;
        switch(employee.getRole()) {
            case "Employee":
                break;
            case "Engineer":
                extraHTML = `<div class = "box has-background-grey-lighter">${employee.getGitHub()}</div>`
                break;
            case "Intern":
                extraHTML = `<div class = "box has-background-grey-lighter">${employee.getSchool()}</div>`
                break;
            case "Manager":
                extraHTML = `<div class = "box has-background-grey-lighter">${employee.getOfficeNumber()}</div>`
                break;
        }
        memberString += `
        <div class = "card col-sm-10 col-md-5 col-lg-3 m-3 has-background-light">
            <div class="card-content">
            <div class="box media has-background-info">
                <div class="media-content">
                <p class="title is-4">${employee.getName()}</p>
                <p class="subtitle is-5">${icons[employee.getRole()]} ${employee.getRole()}</p>
                </div>
            </div>
        
            <div class="content">
                <div class = "box has-background-grey-lighter">${employee.getID()}</div>
                <div class = "box has-background-grey-lighter">Email: <a href = "mailto:${employee.getEmail()}">${employee.getEmail()}</a></div>
                ${extraHTML}
            </div>
            </div>
        </div>
        `;
    });
    return memberString;
};

const generatePage = cardArray => {
    let pageHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" integrity="sha384-tKLJeE1ALTUwtXlaGjJYM3sejfssWdAaWR2s97axw4xkiAdMzQjtOjgcyw0Y50KU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header>
        <h1 class = "has-text-light is-size-1 has-text-centered has-background-danger pb-3 mb-1 pt-1 has-text-weight-semibold">My Team</h1>
    </header>

    <main class = "mx-5">
        <div class = "container">
          <div class = "row justify-content-around">

          ${generateMembers(cardArray)}

          </div>
        </div>
    </main>

    <footer></footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
</body>
</html>
`
    copyFile();
    writeFile(pageHTML);
};

module.exports = generatePage;