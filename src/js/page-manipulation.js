import { retrieveElements } from "./retrieve-elements";
import { numberFormats } from "./number-formatting";
import { backerStats } from "./backer-stats";

const selectionModal = document.getElementById('selectionModal');
const successModal = document.getElementById('successModal');
const pageMask = document.getElementById('pageMask');
const totalBackedEle = document.getElementById('totalAmtBacked');
const totalBackersEle = document.getElementById('totalBackers');
const navBarHam = document.getElementById('navbarBtn');
const navBarClose = document.getElementById('closeNavBtn');
const navMobile = document.getElementById('mobileNav');

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

  toggleMobileNav: () => {
    navMobile.classList.toggle('hidden');
    navBarHam.classList.toggle('hidden');
    navBarClose.classList.toggle('hidden');
    pageManipulation.togglePageMask();
  },

  updateBackerStats: () => {
    totalBackedEle.textContent = numberFormats.USD.format(backerStats.totalMoneyBacked);
    totalBackersEle.textContent = numberFormats.standard.format(backerStats.totalBackers);
  }
}