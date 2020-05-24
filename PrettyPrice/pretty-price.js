
function prettyPrice (price, cents) {
 // TODO: Ensure items are numbers   
 // TODO: Take price subtract $1 and add {cents}
    //TODO: Split price into dollars and cents
    //TODO: Subtract $1 from dollars
    //TODO: Replace cents with {cents}

    if(cents.toString().length < 2 || cents.toString().length> 2) {
        alert("Please input a two-digit cents value for the sale price")
    }else {

        let breakdown = price.toString().split(".");
        console.log(breakdown);
        let newDollarAmt = parseInt(breakdown[0]) - 1;
        console.log(newDollarAmt);
        let newPrice = newDollarAmt.toString().concat(".", checkCents(cents));
    
        console.log(newPrice); 
    }  
}

function checkCents(cents) {
    let centString = cents.toString()
    if(centString.includes(".")) {
        centString = centString.slice(2,)
        return centString;
    }else {
        return cents;
    }
}

prettyPrice(6,75)
