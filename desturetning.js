
//  const person = { Name: "hridoy khondokar", Age: 24, Home: "Feni", Mobile:01856132328, friend: ['monju', 'jahed', 'tuhin']}

// const num = person.friend[2];

// const { Name,  Home, Mobile} = person;

// console.log(Name, Home, Mobile);


const friend = ['monju', 'jahed', 'tuhin']

const [first, ...next] = friend;
console.log( next );