//Table of 4//
let num=4;
console.log(`Table of ${num}`);
for (let i=1;i <=10 ; i ++){
let Table=num*i;
console.log(`${num} * ${i} = ${Table}`);}


const numL = [4, 15, 5, 40, 7];
// by using forEach()method 
// let Lessnum = num[0]

// numL.forEach((item) => {
//     Lessnum = Lessnum < item ? Lessnum : item
// })
// console.log(`Less Number==> ${Lessnum}`);

//by using Reduce Method
const LessNum = numL.reduce((acc,curr)=>acc<curr ? acc : curr);
console.log(`Less Number ===> ${LessNum}`);

//Square of Numbers//
const sq2=[4,15,5,40,7];

const sq=sq2.map((item)=>item**2);
console.log(`Square Of Numbers==> ${sq}`);


//High//
const num2 =[4,15,5,40,7]
//by using forEachMethod 
// let highnum=[num2]

// num2.forEach((item)=>{
//    highnum=highnum>item ? highnum:item

// })
// console.log(`Highest Number===>${highnum}`)

//by using Reduce() method
const Highnum= num2.reduce((acc,curr)=>acc>curr ? acc : curr);
console.log(`Highest number =====> ${Highnum}`);

//Odd Number//
const odd=[4, 15, 5, 40, 7];

// const oddnum=odd.filter((item)=>!(item%2))
// console.log(`Even Number==>${oddnum}`)

const oddnum1=odd.filter((item)=>item%2===0)
console.log(`Even Number==>${oddnum1}`)

const Greater=[4,15,5,40,7];

//sum of Numbers//
const Add=[4,15,5,40,7]

const Addition=Add.reduce((acc,curr)=>acc+curr)
console.log(`Sum of All Numbers===> ${Addition}`);


//Greater square//
const Great=[4,15,5,40,7];
//by using fistly
const square1 = sq.filter((item)=>item>40)

//by using all in one 
const square=Great.map((item)=>item**2 ).filter((item)=>item>40)
console.log(square1)
console.log(`Greater than 40 number of square number ==> ${square}`);


///NameList///
const nameList = [
    { name: "Sam", age: 4, location:"Mumbai" },
    { name: "Lara", age: 15, location:"Delhi" },
    { name: "Amit", age: 21, location:"Pune" },
    { name: "Sumit", age: 25, location:"Mumbai" },
    { name: "Shehnaz", age: 23, location:"Delhi" },
    { name:"Sana", age: 25, location:"Mumbai" },
    { name: "Parth", age: 40, location:"Mumbai" },
    ];
const result=nameList.filter((item)=>item.age>18  && item.location==="Mumbai");
const search=result.map((item)=>item.name)
console.log(`Print More than 18yrs age from mumbai==> ${search}`)


//List2//
const List2=["My"," ","Name"," ","is"," ","Mayuri"]
const may=List2.join('')
console.log(may)
