const fill = document.querySelector(".fill");
const circles = document.querySelectorAll(".circle");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (const circle of circles) {
  circle.addEventListener("dragover", dragOver);
  circle.addEventListener("dragenter", dragEnter);
  circle.addEventListener("dragleave", dragLeave);
  circle.addEventListener("drop", dragDrop);
}
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "circle";
}
function dragDrop() {
  this.className = "circle";
  this.append(fill);
}
