/* 1.add event handler with witdraw button
2. get the withdraw amount from the withdaw input field
2.5 : also make sure to convert the input into a number by using parseFloat
3: get previous withdraw total
4-5: calculate total withdraw amount
5. get the previos balance total
calculate new balance total
6.5:set the new balance total
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
//step-5

const balanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalString =balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

  // step-7
  withdawField.value = '';

if(newWithdrawAmount > previousBalanceTotal){
    alert('Sorry you do not have enough money');
    return;
}

// step 4
const currectWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdawTotalElement.innerText = currectWithdrawTotal;
//step-6

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;


  
})