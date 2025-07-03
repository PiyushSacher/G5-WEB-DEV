// console.log("Start of js");

// function walkinres(){
//     setTimeout(()=>{
//         console.log("I am going in the res");
//     },3000);
// }

// function checkmenu(){
//     setTimeout(()=>{
//         console.log("I AM CHECKING THE MENU");
//     },2000)
// }

// function ordermenu(){
//     setTimeout(()=>{
//         console.log("I AM ordering food");
//     },5000)
// }

// //async mai jiska time kam hai pehle wo run hoga , chahe wo function call pehle hi huya hai tab bhi

// walkinres();
// checkmenu();
// ordermenu();
// console.log("SOMETHING");






console.log("Start of js");

function walkinres(cb){
    console.log("I am walking in the res");
    setTimeout(cb,3000);
}

function checkmenu(cb){
    console.log("I AM CHECKING THE MENU");
    setTimeout(cb,2000);
    
}

function ordermenu(cb){
    console.log("I AM ordering food");
    setTimeout(cb,5000);    
}

function havingLunch(cb){
    console.log("I am having my lunch");
    setTimeout(cb,1000);
}

function walkout(){
    console.log("I am walking out of hotel");
}

//async mai jiska time kam hai pehle wo run hoga , chahe wo function call pehle hi huya hai tab bhi
walkinres(()=>{
    checkmenu(()=>{
        ordermenu(()=>{
            havingLunch(()=>{
                walkout();
            });
            
        });
    });
})
console.log("SOMETHING");