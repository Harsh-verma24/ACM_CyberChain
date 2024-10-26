document.getElementById("btn").addEventListener('click', function(){
    const type =document.getElementById("userNEED").value;
    const price =Number(document.getElementById("rate").value);
    let netPrice;
    if(type =="type1"){
        netPrice = price + (price*0.1);
        document.getElementById("result").innerHTML= `You have selected ${type} object of price ${price}.Your net price is ${netPrice} after including taxes`;

    }

    else if(type =="type2"){
        netPrice = price + (price*0.2);
        document.getElementById("result").innerHTML= `You have selected ${type} object of price ${price}.Your net price is ${netPrice} after including taxes`;
        
    }

    else {
        netPrice = price + (price*0.3);
        document.getElementById("result").innerHTML= `You have selected ${type} object of price ${price}.Your net price is ${netPrice} after including taxes`;
        
    }
})