document.getElementById('btn-deposit').addEventListener('click', function(){
    const dipositiField = document.getElementById('dipositi-field');
    const newDepositAmountString = dipositiField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString)
    
    // step number four 
    const currentDepositTotal = previousDepositTotal + newDepositAmount ;
    
    depositTotalElement.innerText = currentDepositTotal;

    // step number 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    // step 6
    const courrentBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotalElement.innerText = courrentBalanceTotal;


    // step 7
    dipositiField.value ='';
})