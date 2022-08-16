/* 1.add event handler with witdraw button
2. get the withdraw amount from the withdaw input field
2.5 : also make sure to convert the input into a number by using parseFloat
3: get previous withdraw total
4-5: calculate total withdraw amount
 step-7 clear the input field
step =1
*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-:
    const withdawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step:3

    const withdawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    // step 4
    const currectWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step 5

    withdawTotalElement.innerText = currectWithdrawTotal;


    // step-7
    withdawField.value = '';
})