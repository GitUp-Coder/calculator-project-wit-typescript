import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindly enter your first  no:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindly enter your first  no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator:"
    },
]);
const { numberone, numbertwo, operator } = answers;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    if (operator === "*") {
        result = numberone * numbertwo;
    }
    if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("you result is :", result);
}
else {
    console.log("please enter valid number");
}
