let age: number = 20;
if (age < 50) {
  console.log('You are young!');
}
console.log(age);

let sales = 123_456_789;
let course: string = 'TypeScript';
let is_published:boolean = true;
let level;// this is of type 'any'
level = 1;
level = 'a';

function render(document:any) {
    console.log(document);
}


let numbers = [1, 2, 3, '4', 5, true]; // each element can be a different type
let empty = []; // each element can be a different type
empty[0] = 1;
//numbers.forEach(n -> n.toFixed(2));


let user: [number, string] = [1, 'Mosh'];// fixed number of elements and fixed types
//let user2: [number, string] = ['1', 'Mosh'];// Type 'string' is not assignable to type 'number'.ts(2322)

// this compiles to a javscript array
user.push(3); // this is allowed - this now has 3 items, Typescript should not allow this!
console.log(user);


// Enums

const small = 1

enum Size { Small = 1, Medium = 2, Large = 3 }
enum SizeWithDefaultValue { Small = 1, Medium, Large }
enum Size2 { Small = 's', Medium = 'm', Large = 'l' }
const mySize = Size.Medium;


const enum SizeWithConst { Small = 1, Medium = 2, Large = 3 }

// always annotate return types and input types
function calculateTax(income: number, taxYear: number): number {
  let x = 0;
  if (taxYear === 2020) {
    x = 0.2;
  }
  if (income < 5000) {
    return income * 1.2;
  }
  x = 0;
  // undefined - Javascript will return undefined by default
  return x;
}

calculateTax(1000, 2020);

// always annotate return types and input types
function calculateTaxWithOptionalArgument(income: number, taxYear?: number): number {
  let x = 0;
  // if ((taxYear || 2022) < 2020) { // javascript way
  //   x = 0.2;
  // }
  if (taxYear === 2020) {
    x = 0.2;
  }
  if (income < 5000) {
    return income * 1.2;
  }
  // undefined - Javascript will return undefined by default
  return x;
}

function calculateTaxWithOptionalArgumentWithDefaultValue(income: number, taxYear:number = 2022): number {
  // let x;
  // if ((taxYear || 2022) < 2020) { // javascript way
  //   x = 0.2;
  // }
  if (taxYear === 2020) {
    taxYear = 0.2;
  }
  if (income < 5000) {
    return income * 1.2;
  }
  // undefined - Javascript will return undefined by default
  return 0;
}

calculateTaxWithOptionalArgument(1000, 2020); // fails in Javascript


// Properties

let employeee = { id: 1 }
//employee.name = 'Mosh';// this doesn't work
// The typescript way:

let employee: {
  id: number,
  name: string
} = { id: 1, name: '' };
employee.name = 'Mosh';

let employeeOptional: {
  id: number,
  name?: string// not recommended for Typescript although it allows you too because the name is always needed
} = { id: 1, name: '' };
employeeOptional.name = 'Mosh';


// problems with this object:
// 1. It's not Dry
// 2. It's not reusable
// 3. Hard to understand, verbose
let employeeFull: {
  readonly id: number,
  name?: string// not recommended for Typescript although it allows you too because the name is always needed
  retire: (date: Date) => void// if we don't want to return something
} = { id: 1, name: 'Mosh',
  retire: (date: Date) => console.log('retired' + date.toDateString())// if we don't want to return something
 };
//employeeFull.id = 0;// you can't do this

// use types aliases
type Employee = {
  readonly id: number,
  name?: string
  retire: (date: Date) => void
}

// Union Types

function kgToLbs(weight: number | string): number {
  // we only get methods that are available in both number and string
  // Narrowing
  if (typeof weight === 'number') {
    // we get methods that are available in number only
    return weight * 2.20462;
  }
    else {
    return parseInt(weight) * 2.20462;
    }
}

kgToLbs(50);
kgToLbs('50');

// Intersection Types
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

// combine them with intersection types
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => console.log('dragging'),
  resize: () => console.log('resizing')
}

// literal types
// limit values you can assign to a variable
let quantity: number;//this can take any valid number in javascript
let quantityLiteral: 50 | 100 = 100;//this can only take 1, 2 or 3

type Quantity = 50 | 100;
let quantityType: Quantity = 100;

type Metric = 'cm' | 'm' | 'km';


// nullable types
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase());
}

// vanilla javascript
//greet(null);// this will return an error in Typescript - Argument of type 'null' is not assignable to parameter of type 'string'.ts(2345)
// but what can we do if we wanted to allow nulls?
function greetWithNullableTypes(name: string | null | undefined) {
  if (name)
    console.log('Hello, ' + name.toUpperCase());
  else
    console.log('Hello, guest');
}
greetWithNullableTypes(null);

type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
  console.log(customer.birthday);
}

// optional property access operator
console.log(customer?.birthday);


let customer2 = getCustomer(1);
console.log(customer2?.birthday?.getFullYear());

// optional element access operator
let customers = [ getCustomer(1) ]
customers?.[0];

// optional call
let log: any = (message: string) => console.log(message);
let log2: any = null;
log2?.('a');