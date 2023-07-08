let turn = "X"
let array = []
let valid1 = []
let valid2 = []
let tab = []
let click=0


function repeat(n1,n2,n3) {
  titre.innerHTML = `${array[n1]} winner`;

  document.getElementById('item'+n1).style.backgroundColor="black"
  document.getElementById('item'+n2).style.backgroundColor="black"
  document.getElementById('item'+n3).style.backgroundColor="black"
 setInterval(function() {titre.innerHTML+= '.'},1000);
 setTimeout(function () {location.reload()},3000)
}

function Nulle() {
   if(array[1]!="" && array[2]!="" && array[3]!="" && array[4]!="" && array[5]!="" && array[6]!="" && array[17]!="" && array[8]!="" && array[9]!="" && click==9        ){
    titre.innerHTML = ` Partie Nulle`;
    setInterval(function() {titre.innerHTML+= '.'},1000);
    setTimeout(function () {location.reload()},3000)
  }
}

function arr() {
  for (let i = 1; i < 10; i++) {
    array[i] = document.getElementById('item' + i).innerHTML;
  }

    if (array[1] == array[2] && array[2] == array[3] && array[2] != "") {
      repeat(1,2,3)
    }
    else if (array[4] == array[5] && array[5] == array[6] && array[5] != "") {
      repeat(4,5,6)
    }
    else if (array[7] == array[8] && array[8] == array[9] && array[8] != "") {
      repeat(7,8,9)
    }
    else if (array[1] == array[4] && array[4] == array[7] && array[4] != "") {
      repeat(1,4,7)
    }
    else if (array[1] == array[4] && array[4] == array[7] && array[4] != "") {
      repeat(2,5,8)
    }
    else if (array[3] == array[6] && array[6] == array[9] && array[6] != "") {
      repeat(3,6,9)
    }
    else if (array[1] == array[5] && array[5] == array[9] && array[5] != "") {
      repeat(1,5,9)
    }
    else if (array[3] == array[5] && array[5] == array[7] && array[5] != "") {
      repeat(3,5,7)
    }
  
}




// function win() {
//   valid1=array.slice(0,3)
//   if (valid1[0]=== valid1[1] && valid1[2]=== valid1[3]) {
//     document.getElementById('titre').innerHTML= turn+ " Win !! ";
//   }
// }




// function winn() {
//   if (document.getElementById('item1').innerHTML=="X" && document.getElementById('item2').innerHTML=="X" && document.getElementById('item3').innerHTML=="X"  ) {
//     document.getElementById('titre').innerHTML="X Winn !!!" ;
//   }
// }







function add(id) {

  let element = document.getElementById(id)
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X"
    click++
    turn = "O";
    document.getElementById('titre').innerHTML = "Role de " + turn;
  }
  else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O"
    click++
    turn = "X";
    document.getElementById('titre').innerHTML = "Role de " + turn;
  }
  arr()
  Nulle()
}