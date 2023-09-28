/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U>(objA: T, objB: U): object {
  return Object.assign(objA, objB);
}

export {};

const obj1 = { name: "foo", description: "foo description" };
const obj2 = { age: 21, id: 31 };
console.log(merge(obj1, obj2));
