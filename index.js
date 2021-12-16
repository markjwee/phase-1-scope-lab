// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not" + " " + customerName.toLowerCase();
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "inigo montoya";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "mandy patinkin"
}