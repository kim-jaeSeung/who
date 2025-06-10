export function travelProjectBtn(modalId) {
    let modalBtn = document.getElementById(modalId);
    modalBtn.style.display = "flex";
    document.body.style.overflow = "hidden";
}
export function travelProjectBtnClose() {
    // let modalMain = document.querySelector(".portfolioPopup") as HTMLElement;
    // modalMain.style.display = "none";
    document.querySelectorAll(".portfolioPopup").forEach((element) => {
        element.style.display = "none";
    });
    document.body.style.overflow = "";
}
