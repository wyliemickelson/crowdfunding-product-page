const selectionModal = document.getElementById('selectionModal');

export const pageManipulation = {
  toggleSelectionModal: () => {
    selectionModal.classList.toggle('hidden');
    let checkedBtn = pageManipulation.updatePledges();
    checkedBtn.scrollIntoView({ block: 'center' });
  },
  
  updatePledges: () => {
    let checkedBtn = document.querySelector('input[name="pledge"]:checked');
    let uncheckedBtns = Array.from(document.querySelectorAll('input[name="pledge"]:not(:checked)'));
    let pledgeConfirm = checkedBtn.parentElement.parentElement.nextElementSibling;
    pledgeConfirm.classList.remove('hidden');
    uncheckedBtns.forEach((uncheckedBtn) => {
      pledgeConfirm = uncheckedBtn.parentElement.parentElement.nextElementSibling;
      pledgeConfirm.classList.add('hidden');
    })
    return checkedBtn;
  },
  
  checkRadioBtn: (btn) => {
    btn.checked = true;
  }
}