const restaurent={
    dish1:{
        price:2000,
        ingredients:'fish,tomatoes,maonezi',
        saving:30
    },
    dish2:{
        price:30,
        ingredients:'meat,tomatoes,cheaps',
        saving:4
    },
    dish3:{
    price:6000,
    ingredients:'superget,onion,meat',
    saving:50
    }
}

function colculatebill(DishName, customerName){
    if(restaurent[DishName]==undefined){
        console.log(`Sorry Mr/Mrs ${customerName}, unfortunately we don't offer that dish...`)
    }else{


    var billPrice=restaurent[DishName].price*restaurent[DishName].saving;
   var tax=0;
   if(billPrice<=100){
       tax=billPrice*0.15;
   }else{
    tax=billPrice*0.20;
   }
  var totalBill=billPrice+tax;
  var tip=totalBill*0.10;
  
console.log(`Thank you Mr/Mrs ${customerName} for dinning with us! Your bill is as follows:
    Total: RWF ${totalBill} (incl. tax of ${tax}) and you have tipped the waiter RWF ${tip}`)
}
}
colculatebill('dish4', 'david')
