
function order() {
    var price = document.querySelector("#Price").value;
    var qty = document.querySelector("#Quantityprice").value;
    var shipping = document.querySelector("#Shippingprice").value;
    // var display = document.getElementsByClassName("display-final").value;

    var total = parseInt(price) * parseInt(qty);

    var GST = (total * 18) / 100;

    document.querySelector("#GSTPRICE").innerHTML = GST;

    var finalprice = Math.floor(total +  parseInt(shipping) +GST);


        document.querySelector("#totalamount").innerHTML = finalprice; 
}
