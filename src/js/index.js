import "../scss/main.scss";

const backProjectBtn = document.getElementById('backProjectBtn');
const selectionModal = document.getElementById('selectionModal');
const selectionModalCloseBtn = document.getElementById('selectionModalCloseBtn');
const pledgeRadioBtns = document.getElementsByClassName('pledge_radio');

Array.from(pledgeRadioBtns).forEach((btn) => btn.addEventListener('change', () => {
  pledgeRadioBtnHandler(btn);
}))

backProjectBtn.addEventListener('click', () => {
  toggleHidden(selectionModal);
});

selectionModalCloseBtn.addEventListener('click', () => {
  toggleHidden(selectionModal);
});

function toggleHidden(element) {
  element.classList.toggle('hidden');
}

function pledgeRadioBtnHandler(checkedBtn) {
  let uncheckedBtns = Array.from(document.querySelectorAll('input[name="pledge"]:not(:checked)'));
  let pledgeConfirm = checkedBtn.parentElement.parentElement.nextElementSibling;
  pledgeConfirm.classList.remove('hidden');
  uncheckedBtns.forEach((uncheckedBtn) => {
    pledgeConfirm = uncheckedBtn.parentElement.parentElement.nextElementSibling;
    pledgeConfirm.classList.add('hidden');
  })
}