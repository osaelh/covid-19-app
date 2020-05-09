const questions = [
  "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
  "Quelle est votre température corporelle ?",
  "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
  "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
  "Ces derniers jours, avez-vous un mal de gorge ?",
  "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
  "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
  "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
  "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
  "Actuellement, comment vous vous sentez ?",
  "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
  "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
  "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
  "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
  "Êtes-vous diabétique ?",
  "Avez-vous ou avez-vous eu un cancer ?",
  "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
  "Avez-vous une insuffisance rénale chronique dialysée ?",
  "Avez-vous une maladie chronique du foie ?",
  "Êtes-vous enceinte ?",
  "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
  "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)."  
];
const startBtn = document.querySelector('#start');
const wrapper = document.querySelector('#main');
const precedent = document.querySelector('#precedent');
const suivant = document.querySelector('#suivant');
const resultat = document.querySelector('#resultat');
const form  = document.querySelector('#form');
const questionnaireBullet = document.querySelector('#bullet2');
const question = document.querySelector('.questions')
console.log(precedent)
console.log(questions)

var conter = 0;
var reponces = [];
var val = 1;

function testStart(){
  wrapper.style.display = 'none';
  precedent.style.display = 'none';
  resultat.style.display = 'none';
  form.style.display = 'block';
  startBtn.style.display = 'none';
  questionnaireBullet.className ='bullet completed';
  question.innerHTML = questions[0];
  nextQuestion();
  
}

startBtn.addEventListener('click',testStart);
suivant.addEventListener('click',nextQuestion);

function nextQuestion(e){
  if(conter >= 0 && conter < questions.length -1){
    conter++;
  }
  // if(conter == questions.length){
  //   suivant.style.display ='none';
  //   resultat.style.display ='block';
  // }
  // if(conter == questions.length - 21){
  //   suivant.style.display ='block';
  //   resultat.style.display ='none';
  //   precedent.style.display = 'none'
  // }
  precedent.style.display ='block';
  question.innerHTML=questions[conter];
  e.preventDefault();
}
// let progress = 1
// showSlide(progress);


// function nextQuestion( n ){
//   showSlide( progress += n );
// }

// function showSlide(n){
//   if (n === 1){
//     precedent.style.display = 'none';
//   }else{
//    precedent.style.display = 'block';
//   }

//   if ( n === questions.length - 1){
//     suivant.style.display = 'none';
//   }else{
//     suivant.style.display ='block';
//   }

  

//   question.innerHTML = questions[n];
// }