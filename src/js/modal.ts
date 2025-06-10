export function travelProjectBtn(modalId: string) {
  let modalBtn = document.getElementById(modalId) as HTMLElement;
  modalBtn.style.display = "flex";
  document.body.style.overflow = "hidden";
}

export function travelProjectBtnClose() {
  // let modalMain = document.querySelector(".portfolioPopup") as HTMLElement;
  // modalMain.style.display = "none";
  document.querySelectorAll(".portfolioPopup").forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });
  document.body.style.overflow = "";
}
