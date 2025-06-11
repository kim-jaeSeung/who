export function travelProjectBtn(modalId) {
    let modalBtn = document.getElementById(modalId);
    modalBtn.style.display = "flex";
    document.body.style.overflow = "hidden";
}
export function travelProjectbackClose(e) {
    if (e.target === e.currentTarget) {
        document.querySelectorAll(".portfolioPopup").forEach((element) => {
            element.style.display = "none";
        });
        document.body.style.overflow = "";
    }
}
export function travelProjectBtnClose() {
    document.querySelectorAll(".portfolioPopup").forEach((element) => {
        element.style.display = "none";
        document.body.style.overflow = "";
    });
}
