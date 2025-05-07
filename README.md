###How does TypeScript help in improving code quality and project maintainability?

In a simple answer, **TypeScript catches code errors at compile time, but JavaScript catches errors at runtime.**

Suppose we have a function `add(...args)` which will return the sum of the array. In JS, if we send this array `[1,  1, 5, 5, ‘a, ‘b’]` as the parameter, it would not mind and will give the result `“12ab”`. So, these functions made mistakes one it concatenated a string and an integer; another returned a `string` value when it should return a `number` value. Now let us take the same example for TS, in TS we first have to declare what type of array the add function expects, `add(...args: number[]): number` if it is a number type array, TS will show an error message when we try to mix a another data type or a different type of array. Also we have metioned our return type would be `number`. So, mistakes are avoided before they are even made.

Now think think this example in production. If a developer makes this mistake, the person will know when the application is live, wasting so much time and resources, and also the reputation of the application. But TS comes as a good friend who would not let you make these types of mistakes, making the code quality good and easier to maintain. 

### Provide an example of using union and intersection types in TypeScript.

Let’s say we have a type `User` and a type `Admin`,

    type User = {
        id: string,
        name: string,
        email: string
    }
    
    type Admin = {
        role: string,
        duties: string[],
        salary: number
    }
    
    type Employee = User | Admin;
    type AdminUser = User & Admin;

Now, the `Employee` type can have a `salary` property, but not have `duties` or a `role` property. But an `AdminUser` type must have all the properties of `User` and `Admin`. In a simple answer `Employee` can have all the properties or some of them of User and Admin. On the other hand, `AdminUser`, which was created by intersection, must satisfy all the properties of both `User` and `Admin`.
