window.addEventListener("load", function () {
  // move section links to end of header
  Array.from(document.querySelectorAll(".header-link")).forEach((link) => {
    let p = link.parentNode;
    p.previousElementSibling.appendChild(link);
    p.remove();
  });
});