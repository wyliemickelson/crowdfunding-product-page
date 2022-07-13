import { retrieveElements } from "./retrieve-elements";
import { numberFormats } from "./number-formatting";

const selectionModal = document.getElementById('selectionModal');
const successModal = document.getElementById('successModal');
const pageMask = document.getElementById('pageMask');
const totalBackedEle = document.getElementById('totalAmtBacked');
const totalBackersEle = document.getElementById('totalBackers');

export const pageManipulation = {
  toggleSelectionModal: () => {
    selectionModal.classList.toggle('hidden');
    pageManipulation.updatePledges();
    let checkedBtn = retrieveElements.getCheckedBtn();
    checkedBtn.scrollIntoView({ block: 'center' });
    pageManipulation.togglePageMask();
  },

  toggleSuccessModal: () => {
    successModal.classList.toggle('hidden');
    pageManipulation.togglePageMask();
    successModal.scrollIntoView({ block: 'center' });
  },
  
  updatePledges: () => {
    let checkedBtn = retrieveElements.getCheckedBtn();
    let uncheckedBtns = Array.from(document.querySelectorAll('input[name="pledge"]:not(:checked)'));
    let pledgeConfirm = retrieveElements.getPledgeConfirm(checkedBtn);
    pledgeConfirm.classList.remove('hidden');
    uncheckedBtns.forEach((uncheckedBtn) => {
      pledgeConfirm = retrieveElements.getPledgeConfirm(uncheckedBtn);
      pledgeConfirm.classList.add('hidden');
    })
  },
  
  checkRadioBtn: (btn) => {
    btn.checked = true;
  },

  togglePageMask: () => {
    pageMask.classList.toggle('hidden');
  },

  addToTotal: (amount) => {
    let currTotal = Number(totalBackedEle.textContent.replace(/\D/g,''));
    currTotal += amount;
    currTotal = numberFormats.USD.format(currTotal);
    totalBackedEle.textContent = currTotal;
    
    let currBackers = Number(totalBackersEle.textContent.replace(/\D/g,''));
    currBackers += 1;
    currBackers = numberFormats.standard.format(currBackers);
    totalBackersEle.textContent = currBackers;
  }
}