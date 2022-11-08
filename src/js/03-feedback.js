import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';
const formInfo = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  formInfo[event.target.name] = event.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(formInfo));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
  console.log(formInfo);
}

function savedComment() {
  const commentText = localStorage.getItem(FORM_KEY);
  if (commentText) {
    saveObj = JSON.parse(commentText);

    for (let key of form) {
      if (saveObj.hasOwnProperty(key.name)) {
        formInfo[key.name] = key.value = saveObj[key.name];
      }
    }
  }
}
savedComment();
