#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 54321;
async function main() {
    // For pin code:
    let pinAnswer = await inquirer.prompt([
        {
            name: 'pin',
            type: 'number',
            message: 'Enter your pin code',
        }
    ]);
    console.log(pinAnswer);
    // For pin code: 54321 true or else false.
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code.");
        // For perform operations:
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Which action would you like to perform?",
                type: "list",
                choices: ["Check Balance", "Cheque Deposit", "Transferring Money", "Withdraw"],
            }
        ]);
        console.log(operationAns);
        // Operation: Check Balance in your account.
        if (operationAns.operation === "Check Balance") {
            console.log("Your Total balance is " + myBalance);
        }
        // Operation: Deposit money in your account.
        if (operationAns.operation === "Cheque Deposit") {
            let depositMoney = await inquirer.prompt([
                {
                    name: "collect",
                    type: "number",
                    message: "Enter your amount for cheque deposit.",
                }
            ]);
            console.log(depositMoney);
            myBalance += depositMoney.collect;
            console.log("Your money deposited, Now your total amount is " + myBalance);
        }
        // Operation: Transfer money in your account.
        if (operationAns.operation === "Transferring Money") {
            let transferMoney = await inquirer.prompt([
                {
                    name: "moneyTransfer",
                    type: "number",
                    message: "Enter the amount you want to transfer.",
                }
            ]);
            console.log(transferMoney);
            myBalance -= transferMoney.moneyTransfer;
            console.log("Your money is transferred, and now your remaining balance is " + myBalance);
        }
        // Operation: Withdraw money from your account.
        if (operationAns.operation === "Withdraw") {
            let cashWithdrawal = await inquirer.prompt([
                {
                    name: "withdrawalOption",
                    type: "list",
                    message: "Select an option to withdraw money:",
                    choices: ["Cash Withdraw", "Fast Cash"],
                }
            ]);
            console.log(cashWithdrawal);
            if (cashWithdrawal.withdrawalOption === "Cash Withdraw") {
                let amountToWithdraw = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you want to withdraw:",
                    }
                ]);
                console.log(amountToWithdraw);
                myBalance -= amountToWithdraw.amount;
                console.log("Your remaining balance after withdrawal is " + myBalance);
            }
            if (cashWithdrawal.withdrawalOption === "Fast Cash") {
                let cashFastii = await inquirer.prompt([
                    {
                        name: "fastCashii",
                        type: "list",
                        message: "Select an amount to withdraw:",
                        choices: ["1000", "2000", "5000", "7000"],
                    }
                ]);
                console.log(cashFastii);
                //  Select options For Fast cash.
                if (cashFastii.fastCashii === "1000") {
                    myBalance -= cashFastii.fastCashii; //   output is 9000
                    console.log("Your remaining amount is " + myBalance);
                }
                if (cashFastii.fastCashii === "2000") {
                    myBalance -= cashFastii.fastCashii; //   output is 8000
                    console.log("Your remaining amount is " + myBalance);
                }
                if (cashFastii.fastCashii === "5000") {
                    myBalance -= cashFastii.fastCashii; //   output is 5000
                    console.log("Your remaining amount is " + myBalance);
                }
                if (cashFastii.fastCashii === "7000") {
                    myBalance -= cashFastii.fastCashii; //   output is 3000
                    console.log("Your remaining amount is " + myBalance);
                }
            }
        }
    }
    else {
        console.log("Incorrect pin code.");
    }
}
main();
