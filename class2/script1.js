// function calculate(param1){
//     //param1();
//     console.log("Calculate the business logic")
//     param1();
    
// }

// var sumOfTwo=()=>{
//     console.log("Sum of 2 working");
// }
// calculate(sumOfTwo);




// function calculate(logicFn,a,b){
//     return logicFn(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5));
// console.log(calculate(sub,3,5));


//agar funcion kuch bhi return na kre toh undefined return hota hai 

function StudentDetails(logicFn,a,b){
    return logicFn(a,b);
}

function Emi(name,fees){
    return fees/10;
}
 
function welcome(name,fees){
    var a=`${name},with fees as ${fees}`;
    // Emi(fees);
    return a;
}
console.log(StudentDetails(welcome,"Piyush",30000));
console.log(StudentDetails(Emi,"Piyush",30000));



setTimeout(()=>{
    console.log("HELLO");
},2000)


setInterval(()=>{
    console.log("SET interval");
},3000)





