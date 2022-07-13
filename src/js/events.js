import { pageManipulation } from "./page-manipulation";

const backProjectBtn = document.getElementById('backProjectBtn');
const selectionModalCloseBtn = document.getElementById('selectionModalCloseBtn');
const pledgeRadioBtns = Array.from(document.getElementsByClassName('pledge_radio'));
const tierSelectBtns = Array.from(document.getElementsByClassName('tier_select_btn'));
const pledgeTitles = Array.from(document.getElementsByClassName('pledgeTitle'));
const pledgeContinueBtns = Array.from(document.getElementsByClassName('pledgeContinue'));
const pledgeDefault = document.getElementById('pledgeDefault');
const modalSuccessBtn = document.getElementById('modalSuccessBtn');

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
      pageManipulation.addToTotal(Number(pledgeAmt));
    }
    pageManipulation.toggleSelectionModal();
    pageManipulation.toggleSuccessModal();
  },

  modalSuccessBtnHandler: () => {
    pageManipulation.toggleSuccessModal();
  }
}
