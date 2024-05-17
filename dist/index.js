"use strict";
let age = 20;
if (age < 50) {
    console.log('You are young!');
}
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, '4', 5, true];
let empty = [];
empty[0] = 1;
let user = [1, 'Mosh'];
user.push(3);
console.log(user);
const small = 1;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var SizeWithDefaultValue;
(function (SizeWithDefaultValue) {
    SizeWithDefaultValue[SizeWithDefaultValue["Small"] = 1] = "Small";
    SizeWithDefaultValue[SizeWithDefaultValue["Medium"] = 2] = "Medium";
    SizeWithDefaultValue[SizeWithDefaultValue["Large"] = 3] = "Large";
})(SizeWithDefaultValue || (SizeWithDefaultValue = {}));
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
const mySize = Size.Medium;
function calculateTax(income, taxYear) {
    let x = 0;
    if (taxYear === 2020) {
        x = 0.2;
    }
    if (income < 5000) {
        return income * 1.2;
    }
    x = 0;
    return x;
}
calculateTax(1000, 2020);
function calculateTaxWithOptionalArgument(income, taxYear) {
    let x = 0;
    if (taxYear === 2020) {
        x = 0.2;
    }
    if (income < 5000) {
        return income * 1.2;
    }
    return x;
}
function calculateTaxWithOptionalArgumentWithDefaultValue(income, taxYear = 2022) {
    if (taxYear === 2020) {
        taxYear = 0.2;
    }
    if (income < 5000) {
        return income * 1.2;
    }
    return 0;
}
calculateTaxWithOptionalArgument(1000, 2020);
let employeee = { id: 1 };
let employee = { id: 1, name: '' };
employee.name = 'Mosh';
let employeeOptional = { id: 1, name: '' };
employeeOptional.name = 'Mosh';
let employeeFull = { id: 1, name: 'Mosh',
    retire: (date) => console.log('retired' + date.toDateString())
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.20462;
    }
    else {
        return parseInt(weight) * 2.20462;
    }
}
kgToLbs(50);
kgToLbs('50');
let textBox = {
    drag: () => console.log('dragging'),
    resize: () => console.log('resizing')
};
let quantity;
let quantityLiteral = 100;
let quantityType = 100;
function greet(name) {
    console.log('Hello, ' + name.toUpperCase());
}
function greetWithNullableTypes(name) {
    if (name)
        console.log('Hello, ' + name.toUpperCase());
    else
        console.log('Hello, guest');
}
greetWithNullableTypes(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map