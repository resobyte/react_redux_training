const data = [1,2,3,4,5];
const newData = [0,...data];

console.log(newData);

//output: 0,1,2,3,4,5

const dataJSON = {
    name:'resat',
    surname:'akcan'
};

const newDataJSON = {
    age:'25',
    ...data
};

console.log(newDataJSON);