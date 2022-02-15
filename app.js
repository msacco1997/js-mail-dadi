// MAIL
const mailControl = document.getElementById('mail-control');
const btnMail = document.getElementById('btn-mail');
btnMail.addEventListener('click', function() {
  mailControl.classList.add('active');
  btnMail.classList.add('active');
})

const btnSubmit = document.getElementById('btn-submit');

const listMail = [
  'luigi@yahoo.it',
  'gianluca@tiscali.it',
  'bezos.boss@amz.com',
  'gianni.21@outlook.com',
  'oldmail@hotmail.com'
]

let check = false;

btnSubmit.addEventListener('click', function(){
  const userMail = document.getElementById('email').value
  for (let i = 0; i < listMail.length; i++) {
    const element = listMail[i];
    if (element === userMail){
      check = true;
    }
  }
  
  // SE è presente dire all'utente che può accedere
  if ( check == true){ 
    alert('Benvenuto, ora puo effettuare l\'accesso');
  } // ALTRIMENTI dire all'utente che non può accedere
  else{ 
    alert('Ooops, sembra che la sua mail non sia abilitata all\'accesso');
  }
})
// ciclo per controllare tutte le mail della lista



// DADI
const launchDice = document.getElementById('launches')
let risultatoUser = document.querySelector('.risultato-utente')
let risultatoPc = document.querySelector('.risultato-pc')
const openeGame = document.querySelector('.dice-game')
const btnDice = document.querySelector('.btn-dice')
console.log(risultatoUser)
let numberUser = 0
let numberPc = 0
// click su bottone per aprire la sessione di gioco
btnDice.addEventListener('click', function(){
  openeGame.classList.add('active')
})
// Lancio i dadi e creo un numero casuale per me e per il pc
launchDice.addEventListener('click', function(){
  numberUser = Math.floor(Math.random() * (6 - 1 + 1) +1);
  numberPc = Math.floor(Math.random() * (6 - 1 + 1) +1);
  console.log(numberUser, numberPc)
  if (numberUser > numberPc){
    risultatoUser.innerHTML = (numberUser)
    risultatoPc.innerHTML = (numberPc)
    risultatoUser.style.background = 'green'
    risultatoPc.style.background = 'red'
  } else if(numberPc === numberUser) {
    risultatoUser.innerHTML = (numberUser)
    risultatoPc.innerHTML = (numberPc)
    risultatoUser.style.background = 'lightblue'
    risultatoPc.style.background = 'lightblue'
  } else {
    risultatoUser.innerHTML = (numberUser)
    risultatoPc.innerHTML = (numberPc)
    risultatoUser.style.background = 'red'
    risultatoPc.style.background = 'green'
  }
})
