




const prettyPriceRef = () => {

    let regPrices = document.getElementsByClassName('r-price');

    [...regPrices].forEach((item) => {
    
        let price = item.value;
        let product = item.name;
            
        if(isNumber(price)) {   

            let priceBase = Math.floor(price);
            let newSalePrice = priceBase + getChange() / 100;
            let checkCards = document.getElementsByClassName('item'); 

            const show = [...checkCards].filter((card) => {  
                return card.id == product; 
            },0);    
            let displayCard = [...show][0];

            document.getElementById(displayCard.id).lastElementChild.innerHTML = "$"+ newSalePrice.toFixed(2);

    
        }else {  
        promptRealNumber(); 
        return false;
        } 

    })
 
}



function getChange() { 

    let saleCents = document.getElementById("sale-price-cents");
    let cents = saleCents.value;

    if(isNumber(cents)) {
        if (cents < 1){
            let change = cents * 100;
            return change; 
        
        }else if (cents >=1 && cents <= 100)  {
            let change = cents;
            return change;
        }else {
            alert("Please ensure cents price is two digits only");
            return false;
        } 

    }else {
        promptRealNumber();
         return false;
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


