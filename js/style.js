const accItems = document.querySelectorAll(".item");
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));
function toggleAcc() {
  accItems.forEach((item) => item != this ? item.classList.remove("item--active") : null);
  if (this.classList != "item--active") {
    this.classList.toggle("item--active");
  }
}