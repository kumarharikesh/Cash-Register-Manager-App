const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const messageTag = document.querySelector(".greeting");
const flagTag = document.querySelector(".flag");
const reset = document.querySelector("#clear");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function clearNoteTable(notes) {
  for (let i = 0; i < notes.length; i++) {      
    notes[i].innerText = "";
  }
}

function validateBillAndCashAmount() {

  const b = Number(billAmount.value);
  const c = Number(cashGiven.value);
  const a = c - b;                           // a = Amount To Be Returned

  if (b > 0) {
                                            // let b=12 and c=2022
    if (c >= b) {
                                              // 2022 > 12 => true // 2022 - 12 = 2010
      calculateChange(a);
      messageTag.innerText = "Kindly visit again!!";
      messageTag.style.color = "green";
      flagTag.innerText = "YES";
      flagTag.style.color = "green";
    } else {
      clearNoteTable(noOfNotes);
      messageTag.innerText = "Do you wanna wash plates?";
      messageTag.style.color = "red";
      flagTag.innerText = "NO";
      flagTag.style.color = "red";

    }
  } else {
    clearNoteTable(noOfNotes);
    messageTag.innerText = "Invalid Bill Amount";
    messageTag.style.color = "red";
    flagTag.innerText = "_";
    flagTag.style.color = "red";

  }
}

function calculateChange(amountToBeReturned) {
                                                                // 2010
                                                                // go over all the available
  for (let i = 0; i < availableNotes.length; i++) {
                                                                    // no of notes need for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
                                                                    // 2010 / 2000 = 1 || 10 / 500 = 0

                                                                    // amount left after calculating the number of notes needed
    amountToBeReturned = amountToBeReturned % availableNotes[i];
                                                                // 2010 % 2000 = 10 || 10 % 500 = 10

                                                                // updating the no of notes in the table for the current amount
    noOfNotes[i].innerText = numberOfNotes;
  }
}

reset.addEventListener("click", function(){
  clearNoteTable(noOfNotes);
  messageTag.innerText = "";
  flagTag.innerText = "";
});

document.getElementById("cash-register-form").addEventListener("submit", function(event){
    validateBillAndCashAmount();
    event.preventDefault();
});