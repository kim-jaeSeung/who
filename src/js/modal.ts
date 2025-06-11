export function travelProjectBtn(modalId: string) {
  let modalBtn = document.getElementById(modalId) as HTMLElement;
  modalBtn.style.display = "flex";
  document.body.style.overflow = "hidden";
}

export function travelProjectbackClose(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    document.querySelectorAll(".portfolioPopup").forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
    document.body.style.overflow = "";
  }
}

export function travelProjectBtnClose() {
  document.querySelectorAll(".portfolioPopup").forEach((element) => {
    (element as HTMLElement).style.display = "none";

    document.body.style.overflow = "";
  });
}
