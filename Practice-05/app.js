//1. Event bubbling means that when an event is triggered on an element (like a click), it is first handled on that element itself, then on its parent, then on its parent’s parent, and so on, bubbling up all the way to the document.

// In other words, the event travels from the innermost element upward.

//2. In event bubbling, the event starts from the inner element and bubbles up to the outer elements. To stop it, we use stopPropagation().

let list = document.querySelector(".list");

list.addEventListener("click", function (e) {
  e.target.classList.toggle("line");
});
