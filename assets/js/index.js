window.addEventListener("load", function () {
  Array.from(document.querySelectorAll(".header-link")).forEach((link) => {
    let p = link.parentNode;
    p.previousElementSibling.appendChild(link);
    p.remove();
  });
});