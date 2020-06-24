const prettyPrice2 = () => {

let regPrices = document.getElementsByClassName('r-price');

  
 
 [...regPrices].forEach((item) => {
    
    let price = item.value;
         
    if(isNumber(price)) {   

       let priceBase = Math.floor(price);
        let newSalePrice = priceBase + getChange() / 100;

        console.log(newSalePrice);

        let checkCards = document.getElementById(price.name); 


    
    }else {
        
       promptRealNumber();
     
    } 

 })
 
}



function getChange() { 

    let saleCents = document.getElementById("sale-price-cents");

    let cents = saleCents.value;
    console.log(cents);

    if(isNumber(cents)) {
        if (cents < 1){
        let change = cents * 100;
        console.log(change);
            return change; 
        
        }else {
            let change = cents;
            return change;
        } 

    }else {
        promptRealNumber();
    }
}


 function isNumber(price) {
     if (!isNaN(parseFloat(price)) && isFinite(price)){
         return true;
     } else {
         return false;
     }
}

function promptRealNumber() {
     alert("Please ensure all values entered are valid prices");
} 


