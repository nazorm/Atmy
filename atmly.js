
function action() {
  let getInput = document.querySelector(".enter");

  let currentBalance = 5000;

  document.querySelector("#orange").addEventListener("click", function() {
    alert(`available balance is ${currentBalance}`);
  });

  document
    .querySelector("#seagreen")
    .addEventListener("click", function() {
      let getAmount = getInput.value;
      if (getAmount === " "){
        alert("Please input a number from 100 naira to 1000 naira")
      } else if (getAmount < 100) { 
        alert("Please input a number from 100 naira to 1000 naira");
      } else if (getAmount > 1000) {
        alert("Please input a number from 100 naira to 1000 naira");
      } else {
        getAmount = parseInt(getInput.value)
        currentBalance += getAmount;
        alert(
          `you have deposited ${getAmount} naira, availabe balance is now ${currentBalance} naira`
        );
      }
    });

  document.querySelector("#yellow").addEventListener("click", function() {
    let getAmount = getInput.value;
    if(getAmount === " "){
      alert("Please input a number from 100 naira to 1000 naira")
    }
     else if (getAmount < 100) {
      alert("Please input a number from 100 naira to 1000 naira");
    } else if (getAmount > 1000) {
      alert("Please input a number from 100 naira to 1000 naira");
    } else {
      getAmount = parseInt(getInput.value);
      currentBalance -= getAmount;
      alert(`you have sucessfully made a withdrawal of ${getAmount} naira, 
      and your available balance is now ${currentBalance} naira`);
    }
  });
}
action();