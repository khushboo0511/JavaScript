const users = [
    {firstName: "Akshay", lastName: "Saini", age: 25},
    {firstName: "Khushboo", lastName: "Chaudhary", age: 22},
    {firstName: "Pooja", lastName: "Chaudhary", age: 20},
    {firstName: "Jyoti", lastName: "Yadav", age: 24},
    {firstName: "Shalaka", lastName: "Wairkar", age:25}
];

const output = users.map((a) => a.firstName + " " + a.lastName);
console.log(output);

const outputNew = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] =++ acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {})
console.log(outputNew);

const outputFilter = users.filter((x) =>x.age < 24).map((x) => x.firstName);

console.log(outputFilter);


let data = users.reduce((acc, personDetails)=>{ 
    if(personDetails.age < 24) acc.push(personDetails.firstName);
      return acc;
    },[]);

console.log(data);
