function getInputValue(){

  var moneyarray = [0, 5.07, 3.80, 5.58, 3.81, 5.78, 3.80, 6.73, 6.04, 5.31, 3.99, 3.77, 4.48, 3.95]

  var inputValue= document.getElementById("hours").value;
  var amet = document.getElementById("occupation").value;

  if (amet == 'kokk') {
      multiply = inputValue * moneyarray[1];
  }
  if (amet == 'õpetaja') {
      multiply = inputValue * moneyarray[2];
  }
  if (amet == 'autojuht') {
      multiply = inputValue * moneyarray[3];
  }
  if (amet == 'lapsehoidja') {
      multiply = inputValue * moneyarray[4];
  }
  if (amet == 'teenija') {
      multiply = inputValue * moneyarray[5];
  }
  if (amet == 'majahoidja') {
      multiply = inputValue * moneyarray[6];
  }
  if (amet == 'aednik') {
      multiply = inputValue * moneyarray[7];
  }
  if (amet == 'loomakasvataja') {
      multiply = inputValue * moneyarray[8];
  }
  if (amet == 'õmbleja') {
      multiply = inputValue * moneyarray[9];
  }
  if (amet == 'juuksur') {
      multiply = inputValue * moneyarray[10];
  }
  if (amet == 'prügisorteerija') {
      multiply = inputValue * moneyarray[11];
  }
  if (amet == 'pesumasina operaator') {
      multiply = inputValue * moneyarray[12];
  }
  if (amet == 'hooldaja') {
      multiply = inputValue * moneyarray[13];
  }

  document.getElementById("sum").innerHTML = multiply + "€";
}
