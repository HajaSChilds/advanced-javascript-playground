const prettyPrice2 = () => {

let regPrices = document.getElementsByClassName('r-price');

 [...regPrices].forEach(item => {
    if(isNumber(item.input)) {

    }else {
        alert("Please ensure all values are valid prices")
    }

    
 })
 
}

 function isNumber(price) {
     if (!isNaN(parseFloat(price)) && isFinite(price)){
         return true;
     } else {
         return false;
     }

}

console.log("Number?:", isNumber("3.4.1"))