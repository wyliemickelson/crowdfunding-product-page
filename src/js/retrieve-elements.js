export const retrieveElements = {
  getCheckedBtn: () => {
    let checkedBtn = document.querySelector('input[name="pledge"]:checked');
    return checkedBtn;
  },

  getPledgeConfirm: (child) => {
    let pledge = child.closest('.pledge');
    let pledgeConfirm = pledge.querySelector('.pledge_confirm');
    return pledgeConfirm;
  }
}