const toggleClass = document.getElementsByClassName("toggle-sign");
const instructionsBtn = document.getElementsByClassName("instructions");
const instructionBlock = document.getElementsByClassName("instruction");

instructionsBtn[0].addEventListener('click', () => {
  instructionBlock[0].classList.add('show');
  console.log('Event listner called!');
});

toggleClass[0].addEventListener('click', () => {
  instructionBlock[0].classList.remove('show');
  console.log('Event listner called!');
});
