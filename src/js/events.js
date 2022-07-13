import { pageManipulation } from "./page-manipulation";

const backProjectBtn = document.getElementById('backProjectBtn');
const selectionModalCloseBtn = document.getElementById('selectionModalCloseBtn');
const pledgeRadioBtns = Array.from(document.getElementsByClassName('pledge_radio'));
const tierSelectBtns = Array.from(document.getElementsByClassName('tier_select_btn'));
const pledgeTitles = Array.from(document.getElementsByClassName('pledgeTitle'));
const pledgeDefault = document.getElementById('pledgeDefault');

export function setupEventListeners() {
  pledgeRadioBtns.forEach((btn) => btn.addEventListener('click', eventHandlers.pledgeRadioBtnHandler));
  pledgeTitles.forEach((titleEle) => titleEle.addEventListener('click', () => {
    eventHandlers.pledgeTitleHandler(titleEle);
  }));

  tierSelectBtns.forEach((btn) => btn.addEventListener('click', () => {
    eventHandlers.tierSelectHandler(btn);
  }))

  backProjectBtn.addEventListener('click', eventHandlers.backProjectBtnHandler);
  selectionModalCloseBtn.addEventListener('click', eventHandlers.backProjectBtnHandler);
}

const eventHandlers = {
  backProjectBtnHandler: () => {
    pageManipulation.checkRadioBtn(pledgeDefault);
    pageManipulation.toggleSelectionModal();
    pageManipulation.togglePageMask();
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
    pageManipulation.togglePageMask();
  }
}
