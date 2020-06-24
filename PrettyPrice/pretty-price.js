
const prettyPrice = (price, cents, itemName) => {
 // TODO: Ensure items are numbers 
 // TODO: Take price subtract $1 and add {cents}
    //TODO: Split price into dollars and cents
    //TODO: Subtract $1 from dollars
    //TODO: Replace cents with {cents}
    //TODO: Display new sale price in cards

    

    let breakdown = price.toString().split(".");
        console.log(breakdown);
        let newDollarAmt = parseInt(breakdown[0]) - 1;
        console.log(newDollarAmt);
        let newPrice = newDollarAmt.toString().concat(".", checkCents(cents));
    
        console.log(newPrice); 
        displayPrices(newPrice, itemName);
       
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
    let findItems = document.querySelectorAll("h3");
        
       
     }
   





function getNewPrices(prettyPrice) {
   
    try {

        let cents = document.getElementById("sale-price-cents").value;

        console.log(cents);
        checkCents(cents);

        let regularPrices = document.querySelectorAll('input');
        console.log(regularPrices);

        for(i = 0; i < regularPrices.length; i++){
            if(!(regularPrices[i].id == "sale-price-cents")) {
                let regularPrice = parseInt(regularPrices[i].value);
                let itemName = regularPrices[i].name; 
                console.log(regularPrice);

                prettyPrice(regularPrice,cents,itemName);
                displayPrices(newPrice, itemName);
                }
            
        } 
    }catch (e) {
        alert("  ");
    }
}




