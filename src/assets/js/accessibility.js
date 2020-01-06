/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
//  Accessibility Adds .user-is-tabbing on body on tab   //
function handleFirstTab(n) {
  9 === n.keyCode &&
    (document.body.classList.add("user-is-tabbing"),
    window.removeEventListener("keydown", handleFirstTab),
    window.addEventListener("mousedown", handleMouseDownOnce));
}
function handleMouseDownOnce() {
  document.body.classList.remove("user-is-tabbing"),
    window.removeEventListener("mousedown", handleMouseDownOnce),
    window.addEventListener("keydown", handleFirstTab);
}
window.addEventListener("keydown", handleFirstTab);
