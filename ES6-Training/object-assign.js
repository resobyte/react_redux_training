const data = {
    name: 'Resat'
};

const data1 = {
    surname: 'Akcan',
    age:23
};

const data2 = {
    age: 26
};

console.log(Object.assign(data,data1));//output: { name: 'Resat', surname: 'Akcan', age: 23 }
console.log(Object.assign(data,data1,data2));//output: { name: 'Resat', surname: 'Akcan', age: 26 }