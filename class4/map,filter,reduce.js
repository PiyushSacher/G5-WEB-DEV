console.log("start script");

let arr=[1,2,3,4,5];

//const newArr=arr.map((x)=>{x*2}); if {} then undefined will come as if {} used then we need to return something as by default for {} return is mandatory
// const newArr=arr.map((x)=>x*2);
// console.log(newArr);

function doubleData(x){
    return x*x;
}

//PROTOTYPES IN JS;
// Array.prototype.mapReplica=(logic)=>{
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }
//this keyword never works with arrow function , that is why it is coming []

//therefore use function keyword to make function
Array.prototype.mapReplica=function(logic){
    let outputArr=[];
    for(let i=0;i<this.length;i++){
        outputArr.push(logic(this[i]));
    }
    return outputArr;
}


const myPrototype=arr.mapReplica(doubleData);
console.log(myPrototype);



//FILTER
const words=["spray","elite","destruction"];
// let newArr2=words.filter((word)=>word.length>6);
// console.log(newArr2);

function helper(str){
    if(str.length>5){
        return str;
    }
}

Array.prototype.filterReplica=function(logic){
    let outputArr=[];
    for(let i=0;i<this.length;i++){
        if(logic(this[i])){
            outputArr.push(this[i]);
        }
    }
    return outputArr;
}

const res=words.filterReplica(helper);
console.log(res);



//Reduce
//arr[2,4,6,8,10] , and i want sum of all elements , so we need the sum
//so we will use reduce function

//reduce(param1,param2)
//reduce function has 2 parameter , 1st is the callback function and 2nd is the initialValue

const initialValue=0;
let arr3=[2,4,6,8,10];
const sumWithInitial=arr3.reduce((acc,curr)=>acc+curr,initialValue);
console.log(sumWithInitial);







let arr4=[2,4,6,8,10,12]

function logic(acc,curr){
    return acc+curr;
}

Array.prototype.reduceReplica=function(logic,initialVal){
    let acc=initialVal;
    for(i=0;i<this.length;i++){
        acc=logic(acc,this[i])
    }
    return acc;
}

let initialVal=0;
let result=arr4.reduceReplica((acc,curr)=>acc+curr,initialVal);
console.log(result);