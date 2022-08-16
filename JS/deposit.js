//step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2 get the deposit amount fom the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get the deposit current total amount
    // for non-input(elemet other than input,text area) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
//step-4 add numbers to set the total deposit
    const currectDepositAmount = previousDepositTotal + newDepositAmount;

    //set the deposit total
    depositTotalElement.innerText = currectDepositAmount;

    //step-5 get balance current total
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);


    //step- calculate current total balance

    const currectBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total

    balanceTotalElement.innerText =currectBalanceTotal;

    //step-7 clear the deposit field
    depositField.value = '';
})