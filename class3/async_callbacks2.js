var cart=["shoes","shirt","jeans","watches"];


function createOrder(cb){
    //take the price and total order
    var noOfItem=cart.length;
    
    var price=noOfItem*1000;
    
    console.log("Order 1");
    setTimeout(cb,3000);
    
}

function placeOrder(cb){
    var OrderID=12345;
    
    console.log("Order created with ID" + OrderID);
    setTimeout(cb,2000);

}

function OrderPayemnt(cb){
    console.log("Order3");
    setTimeout(cb,4000);
    
}

function orderStatus(){
    //all details
    console.log("Order places successfully");
}

createOrder(()=>{
    placeOrder(()=>{
        OrderPayemnt(()=>{
            orderStatus();
        })
    })
})