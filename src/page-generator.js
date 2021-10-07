const fs = require('fs');

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

testData = [["Manager","Jane Smith",1,"janey@fakemail.com","205"],["Engineer","JJ Jameson",2,"ihatespiderman@fakemail.com","ihatespiderman"],["Engineer","Seto Kaiba",3,"ceo@fakemail.com","blueeyeswhitedragon"],["Intern","Napoleon Bonaparte",4,"france@fakemail.com","Saint Helena University"],["Employee","Scruffy",5,"thejanitor@fakemail.com"]];

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

const generateMembers = cardArray => {
    const constructors = {
        Employee: Employee,
        Engineer: Engineer,
        Intern: Intern,
        Manager: Manager
    }
    cardArray.forEach(employeeObj => {
        [role, name, id, email, extra] = employeeObj;
        let employee = Boolean(extra) ? new constructors[role](name, id, email, extra) : new constructors[role](name, id, email);

        console.log(employee.getRole());
    });
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

    //writeFile(pageHTML);
};

generatePage(testData);
module.exports = generatePage;