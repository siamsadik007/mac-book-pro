//memory segment function
function updateMemoryCost(isBaseMemory) {
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');
    if (isBaseMemory == '8gb') {
        totalMemoryCost.innerText = 0;
    }
    else if (isBaseMemory == '16gb') {
        totalMemoryCost.innerText = 180;
    }
    return totalMemoryCost;
}
//update storage cost  
function updateStorageCost(isStorage) {
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');

    if (isStorage == '256gb-ssd') {
        totalStorageCost.innerText = 0;

    }
    else if (isStorage == '512gb-ssd') {
        totalStorageCost.innerText = 100;
    }
    else if (isStorage == '1tb-ssd') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;

}

//update delivery cost 

function updateDeliveryCost(isDeliveryCharge) {
    let deliveryCost = document.getElementById('delivery-charge-cost').innerText;
    let totalDeliveryCost = document.getElementById('delivery-charge-cost');
    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCost.innerText = 0;
    }
    else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryCost.innerText = 20;
    }
    return totalDeliveryCost;
}

//calculate total amount
function calculate(memory, storage, deliverycharge, code) {

    let memoryCost = updateMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = updateStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);

    let currentBalance = document.getElementById('best-cost').innerText;
    let subTotalBalance = document.getElementById('sub-total');
    subTotalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);
    //total cost
    let total = document.getElementById('total');
    total.innerText = subTotalBalance.innerText;

    //promo code
    code = document.getElementById('promo-code-input').value;
    if (code == 'stevekaku') {
        const reducingAmount = parseFloat(subTotalBalance.innerText) * .20;
        const afterPromoCost = subTotalBalance.innerText - parseFloat(reducingAmount);
        total.innerText = afterPromoCost;
    }
}

//Update memory cost 
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateMemoryCost('8gb');
    calculate('8gb');
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateMemoryCost('16gb');
    calculate('16gb');
});

//update Storage Cost 
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateStorageCost('256gb-ssd');
    calculate('256gb-ssd');
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateStorageCost('512gb-ssd');
    calculate('512gb-ssd');
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateStorageCost('1tb-ssd');
    calculate('1tb-ssd');
});
//update delivery cost
document.getElementById('delivery-prime').addEventListener('click', function () {
    updateDeliveryCost('without-charge');
    calculate('without-charge');
});
document.getElementById('delivery-fast').addEventListener('click', function () {
    updateDeliveryCost('with-charge');
    calculate('with-charge');
});
// promo code
document.getElementById('promo-button').addEventListener('click', function () {
    calculate('stevekaku');
    document.getElementById('promo-code-input').value = '';
});


