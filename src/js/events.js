import { pageManipulation } from "./page-manipulation";
import { backerStats } from "./backer-stats";

const backProjectBtn = document.getElementById('backProjectBtn');
const selectionModalCloseBtn = document.getElementById('selectionModalCloseBtn');
const pledgeRadioBtns = Array.from(document.getElementsByClassName('pledge_radio'));
const tierSelectBtns = Array.from(document.getElementsByClassName('tier_select_btn'));
const pledgeTitles = Array.from(document.getElementsByClassName('pledgeTitle'));
const pledgeContinueBtns = Array.from(document.getElementsByClassName('pledgeContinue'));
const pledgeDefault = document.getElementById('pledgeDefault');
const modalSuccessBtn = document.getElementById('modalSuccessBtn');
const navBarHam = document.getElementById('navbarBtn');
const navBarClose = document.getElementById('closeNavBtn');

export function setupEventListeners() {
  pledgeRadioBtns.forEach((btn) => btn.addEventListener('click', eventHandlers.pledgeRadioBtnHandler));
  pledgeTitles.forEach((titleEle) => titleEle.addEventListener('click', () => {
    eventHandlers.pledgeTitleHandler(titleEle);
  }));

  tierSelectBtns.forEach((btn) => btn.addEventListener('click', () => {
    eventHandlers.tierSelectHandler(btn);
  }))

  pledgeContinueBtns.forEach((btn) => btn.addEventListener('click', () => {
    eventHandlers.continueBtnHandler(btn);
  }));

  backProjectBtn.addEventListener('click', eventHandlers.backProjectBtnHandler);
  selectionModalCloseBtn.addEventListener('click', eventHandlers.backProjectBtnHandler);
  modalSuccessBtn.addEventListener('click', eventHandlers.modalSuccessBtnHandler);

  navBarHam.addEventListener('click', eventHandlers.handleNavBar);
  navBarClose.addEventListener('click', eventHandlers.handleNavBar);
}

const eventHandlers = {
  backProjectBtnHandler: () => {
    pageManipulation.checkRadioBtn(pledgeDefault);
    pageManipulation.toggleSelectionModal();
  },
  
  pledgeRadioBtnHandler: () => {
    pageManipulation.updatePledges();
  },

  pledgeTitleHandler: (titleEle) => {
    let pledgeHeader = titleEle.closest('.pledge_header');
    let pledgeRadioBtn = pledgeHeader.querySelector('.pledge_radio');
    pageManipulation.checkRadioBtn(pledgeRadioBtn);
    pageManipulation.updatePledges();
  },

  tierSelectHandler: (btn) => {
    let tierName = btn.parentElement.parentElement.querySelector('.tierTitle').textContent;
    let pledgeTitle = pledgeTitles.find((title) => title.textContent == tierName);
    let tierBtn = pledgeTitle.parentElement.parentElement.querySelector('.pledge_radio');
    pageManipulation.checkRadioBtn(tierBtn);
    pageManipulation.toggleSelectionModal();
  },

  continueBtnHandler: (btn) => {
    let pledgeInputs = btn.closest('.pledge_inputs');
    if (pledgeInputs) {
      let pledgeAmt = pledgeInputs.querySelector('.pledge_input_amount').value;
      backerStats.totalMoneyBacked += Number(pledgeAmt);
    }
    backerStats.totalBackers += 1;
    pageManipulation.toggleSelectionModal();
    pageManipulation.toggleSuccessModal();
    pageManipulation.updateBackerStats();
  },

  modalSuccessBtnHandler: () => {
    pageManipulation.toggleSuccessModal();
  },

  handleNavBar: () => {
    pageManipulation.toggleMobileNav();
  }
}
