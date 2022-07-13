const selectionModal = document.getElementById('selectionModal');
const pageMask = document.getElementById('pageMask');

export const pageManipulation = {
  toggleSelectionModal: () => {
    selectionModal.classList.toggle('hidden');
    let checkedBtn = pageManipulation.updatePledges();
    checkedBtn.scrollIntoView({ block: 'center' });
  },
  
  updatePledges: () => {
    let checkedBtn = document.querySelector('input[name="pledge"]:checked');
    let uncheckedBtns = Array.from(document.querySelectorAll('input[name="pledge"]:not(:checked)'));
    let pledgeConfirm = getPledgeConfirm(checkedBtn);
    pledgeConfirm.classList.remove('hidden');
    uncheckedBtns.forEach((uncheckedBtn) => {
      pledgeConfirm = getPledgeConfirm(uncheckedBtn);
      pledgeConfirm.classList.add('hidden');
    })
    return checkedBtn;
  },
  
  checkRadioBtn: (btn) => {
    btn.checked = true;
  },

  togglePageMask: () => {
    pageMask.classList.toggle('hidden');
  }
}

function getPledgeConfirm(child) {
  let pledge = child.closest('.pledge');
  let pledgeConfirm = pledge.querySelector('.pledge_confirm');
  return pledgeConfirm;
}