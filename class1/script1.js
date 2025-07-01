console.log("HELLO WORLD");

var a=200;
console.log(a);

function abc(){
    console.log("Hello brother");
}
abc();

var b=3000;
console.log(b);

//setTimeout is async
setTimeout(()=>{
    console.log("Timeout")
},2000);

console.log("End of program");





function grandparent(){
    var a=200;
    console.log(a);
    //console.log(c)   bahar se andar access nhi kr skte

    function parent(){
        var b=300;
        console.log(b);

        function child(){
            var c=500;
            console.log(c);
        }
        child();
    }
    parent();

}
grandparent();