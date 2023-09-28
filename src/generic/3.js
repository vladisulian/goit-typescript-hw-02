"use strict";
/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var obj1 = { name: "foo", description: "foo description" };
var obj2 = { age: 21, id: 31 };
console.log(merge(obj1, obj2));
