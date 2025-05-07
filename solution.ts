function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredItems = items.filter(item => item.rating >= 4);
    return filteredItems;
}
// const books = [
//     { title: "Book A", rating: 3.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 4.0 }
//   ];

// console.log(filterByRating(books));


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatenatedArray: Array<T> = [];
    arrays.forEach(item => {
        concatenatedArray.push(...item);
    });
    return concatenatedArray;
}
// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5])); 
// console.log(concatenateArrays(['a'], ['f'], [])); 


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"


function processValue(value: string | number): number {
    if (typeof (value) === 'string') {
        return value.length;
    }
    return value * 2;
}
// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10));      // Output: 20


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    const maxPriceProduct = products.reduce((maxProduct, currentProduct) => {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    }, products[0]);
    return maxPriceProduct;
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50, add: 64 }
];
// console.log(getMostExpensiveProduct(products)); 
// console.log(products);
// console.log(getMostExpensiveProduct([])); 


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));
// console.log(getDayType(Day.Wednesday));


async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Error: Negative number not allowed");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n * n;
}
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);