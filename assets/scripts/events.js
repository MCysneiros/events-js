const button = document.querySelector('button');
// const buttonClickHandler = (event) => {
// event.target.disabled = true;
// console.log(event);
// const anotherButtonClickHandler = () => alert('indeed it was clicked');
// button.addEventListener('click', buttonClickHandler);
// buttons.forEach((btn) => btn.addEventListener('scroll', buttonClickHandler));
// setTimeout(() => button.removeEventListener('click', buttonClickHandler), 2000);
// window.addEventListener('scroll', (event) => console.log(event));
// let curElementNumber = 0;
// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;
//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement('div');
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }
// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  console.log('clicked div');
  console.log(event);
});

button.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', function (event) {
  event.target.closest('li').classList.toggle('highlight');
  button.click();
  console.log(this);
});

// listItems.forEach((listItem) =>
//   listItem.addEventListener('click', (event) =>
//     event.target.classList.toggle('highlight')
//   )
// );
