window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
  document.getElementById(currentSquare).style.backgroundColor = "rgb(166, 222, 255)";
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}

function select(elem) {
  
  if(document.getElementById(elem).style.backgroundColor == 'lightcoral')
  {
    document.getElementById(elem).style.backgroundColor = "rgb(166, 222, 255)";
  }
  else
  {
    document.getElementById(elem).style.backgroundColor = 'lightcoral';
  }

}

function onBoxHover(elem) {
  if(!(document.getElementById(elem).style.backgroundColor == 'lightcoral'))
  {
    document.getElementById(elem).style.backgroundColor = "rgb(202, 234, 255)";
  }
}

function changeBack(elem) {
  if(!(document.getElementById(elem).style.backgroundColor == 'lightcoral'))
  {
    document.getElementById(elem).style.backgroundColor = "rgb(166, 222, 255)";
  }
}
