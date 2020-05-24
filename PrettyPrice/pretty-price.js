
const prettyPrice = (price, cents, item) => {
 // TODO: Ensure items are numbers 
 // TODO: Take price subtract $1 and add {cents}
    //TODO: Split price into dollars and cents
    //TODO: Subtract $1 from dollars
    //TODO: Replace cents with {cents}

    

        let breakdown = price.toString().split(".");
        console.log(breakdown);
        let newDollarAmt = parseInt(breakdown[0]) - 1;
        console.log(newDollarAmt);
        let newPrice = newDollarAmt.toString().concat(".", checkCents(cents));
    
        console.log(newPrice); 
        displayPrices(newPrice, item);
       
    }  


function checkCents(cents) {
    let centString = cents.toString();
    console.log(centString);
   
    if(centString.includes(".")) {
       centString = centString.slice(1,)
       console.info(centString);
       return centString;
    }else {  
       return centString;
    }
}

function displayPrices(newPrice, itemName) {
let findItem = document.querySelectorAll("h3")
 for(i=0; i < findItem; i++) {
     if (findItem[i].innerHTML === itemName) {
         console.log('found');
     }
 }

}



function getNewPrices(prettyPrice) {
    let cents = document.getElementById('sale-price-cents').value;

    try {

        console.log(cents);
        checkCents(cents);
        let regularPrices = document.querySelectorAll('input')
        for(i=0; i < regularPrices.length; i++){
            if(!(regularPrices[i].id == "sale-price-cents")) {
                let regularPrice = parseInt(regularPrices[i].value);
                let itemName = regularPrices[i].name; 
                prettyPrice(regularPrice,cents,itemName);
                }
            
        } 
    }catch (e) {
        alert("Please enter numerical values only in all required fields, and two decimal places");
    }

}




