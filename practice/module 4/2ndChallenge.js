let kitchen = {
  receipts: [400, 500, 455, 666, 897],
  expenses: [290, 157, 374, 55, 10],
}

function calculateReceipts() {
  let sumr = 0
  for (let i = 0; i < kitchen.receipts.length; i++)
  sumr += kitchen.receipts[i]
  return sumr
}

function calculateExpenses() {
  let sume = 0
  for (let i = 0; i < kitchen.expenses.length; i++)
  sume += kitchen.expenses[i]
  return sume
}

const receipt = calculateReceipts();
const expense = calculateExpenses();

function kitchenProfit(){
  let profit = receipt - expense
  if (profit > 0) {
    console.log(`Your balance is positive. This week profit is ${profit}BRL!`)
  } else {
    console.log(`Your balance is negative. This week profit is ${profit}BRL.`)
  }
}

kitchenProfit();