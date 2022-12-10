// const opnFace = document.querySelector('.open');
// const clsFace = document.querySelector('.closed');

// opnFace.addEventListener('click', () => {
//     if (clsFace.classList.contains('closed')) {
//         clsFace.classList.add('open');
//         clsFace.classList.remove('open');
//     }
// })

// clsFace.addEventListener('click', () => {
//     if (opnFace.classList.contains('open')) {
//         opnFace.classList.add('closed');
//         opnFace.classList.remove('closed');
//     }
// })

const closedFace = document.querySelector('.active');
const openFace = document.querySelector('.open');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});