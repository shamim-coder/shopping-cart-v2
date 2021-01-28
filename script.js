// Product Default Values
const tShirt = 9.20
const formalShirt = 12
const printedShirt = 6

setDefaultValue('t-shirt',tShirt)
setDefaultValue('formal-shirt',formalShirt)
setDefaultValue('printed-shirt',printedShirt)

function setDefaultValue(id,product){
    document.getElementById(id + '-each-price').innerText = '$' +product + ' each';

}

// 
function quantityCalculation(product,price){
    const productQuantity = parseFloat(document.getElementById(product + '-quantity').value)
    const productTotalPrice = productQuantity * price
    document.getElementById(product + '-price').innerText = '$' + productTotalPrice.toFixed(2);
    subTotalCalculation()
}

function subTotalCalculation(){
    const tShirtQ = getQuantity('t-shirt')
    const formalQ = getQuantity('formal-shirt')
    const printedQ = getQuantity('printed-shirt')
    const subTotal = (tShirtQ * tShirt) + (formalQ * formalShirt) + (printedQ * printedShirt);
    document.getElementById('total-price').innerText = '$' + subTotal.toFixed(2);
    document.getElementById('grand-total').innerText = '$' + subTotal.toFixed(2);
}

function getQuantity(product){
    const quantity = document.getElementById(product + '-quantity')
    const quantityValue = parseFloat(quantity.value);
    return quantityValue
}

function changeHandler(product, price){
    document.getElementById(product + '-quantity').addEventListener('change', function(){
        quantityCalculation(product, price)
    })
}


// changeHandler('t-shirt', tShirt)
// changeHandler('formal-shirt', formalShirt)
// changeHandler('printed-shirt', printedShirt)



// document.getElementById('t-shirt-quantity').addEventListener('change', function(){
//     quantityCalculation('t-shirt', tShirt)
// })
// document.getElementById('formal-shirt-quantity').addEventListener('change', function(){
//     quantityCalculation('formal-shirt', formalShirt)
// })
// document.getElementById('printed-shirt-quantity').addEventListener('change', function(){
//     quantityCalculation('printed-shirt', printedShirt)
// })



// Coupon Added & Validation by Coupon Code
document.getElementById('coupon-button').addEventListener('click', function(){
    const couponValue = document.getElementById('coupon-value').value
    const totalValue = document.getElementById('grand-total').innerText

    const onlyNum = totalValue.substr(1)
    const discountValue = 10;
    const totalAfterDiscount = onlyNum-discountValue;
    if(couponValue === 'HERO2021') {
        document.getElementById('grand-total').innerText = '$' + totalAfterDiscount.toFixed(2);
        document.getElementById('coupon-value').setAttribute('disabled', 'disabled')
    }
    document.getElementById('discount-value').innerText = '-$' + discountValue;
    document.getElementById('discount-value').style.color="red"
})



    
