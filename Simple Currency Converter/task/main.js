input = require('sync-input');

console.log("Welcome to Currency Converter!");

console.log("1 USD equals 1 USD");

console.log("1 USD equals 113.5 JPY");

console.log("1 USD equals 0.89 EUR");

console.log("1 USD equals 74.36 RUB");

console.log("1 USD equals 0.75 GBP");

console.log("What do you want to do?");

let answer = input("1-Convert currencies 2-Exit program\n");

let currencyFrom;

let currencyTo;

let amount;

while(answer) {

    if(Number(answer) === 2) {
        console.log("Have a nice day!");
        break;
    }

    if(Number(answer) !== 1 && Number(answer) !== 2) {
        console.log("Unknown input");

        console.log("What do you want to do?");

        answer = Number(input("1-Convert currencies 2-Exit program\n"));
    }

    console.log("What do you want to convert?");

    currencyFrom = input("From: ").toUpperCase();

    if(currencyFrom === "JPY" || currencyFrom === "EUR" || currencyFrom === "RUB"
        || currencyFrom === "USD" || currencyFrom === "GBP") {
        currencyTo = input("To: ").toUpperCase();
    }

    if((currencyFrom === "JPY" || currencyFrom === "EUR" || currencyFrom === "RUB"
        || currencyFrom === "USD" || currencyFrom === "GBP") && (currencyTo === "JPY" || currencyTo === "EUR" || currencyTo === "RUB"
        || currencyTo === "USD" || currencyTo === "GBP")){
        amount = input("Amount: ");
    }

    let result = 0;

    switch (currencyFrom) {
        case "USD":
            switch (currencyTo){
                case "JPY":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 113.5;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "EUR":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 0.89;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "RUB":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 74.36;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "USD":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 1;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "GBP":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 0.75;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }
            break;
        case "JPY":
            switch (currencyTo){
                case "USD":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 113.5;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "EUR":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 113.5 * 0.89;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "RUB":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 113.5 * 74.36;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "JPY":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 1;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "GBP":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 113.5 * 0.75;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }
            break;
        case "EUR":
            switch (currencyTo){
                case "USD":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.89 ;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "JPY":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.89 *  113.5;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "RUB":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.89 * 74.36;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "EUR":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 1;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "GBP":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.89 * 0.75;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }
            break;
        case "RUB":
            switch (currencyTo){
                case "USD":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 74.36 ;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "JPY":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 74.36 *  113.5;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "RUB":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 1;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "EUR":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 74.36 * 0.89;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "GBP":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 74.36 * 0.75;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }
            break;
        case "GBP":
            switch (currencyTo){
                case "USD":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.75 ;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "JPY":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.75 *  113.5;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "RUB":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.75 * 74.36;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "EUR":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount / 0.75 * 0.89;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                case "GBP":
                    if(amount < 1 ){
                        console.log("The amount cannot be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        result = amount * 1;
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }
            break;
        default:
            console.log("Unknown currency");
            break;
    }
}