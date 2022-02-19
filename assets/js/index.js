/**
 * Do stuff when document loads.
 */
window.addEventListener("load", function () {
  append_section_links_to_headers();
  add_id_copy_listeners_to_headers();
});

/**
 * Re-parents any .header-link nodes
 * under its current parent's previous sibling.
 */
function append_section_links_to_headers() {
  Array.from(document.querySelectorAll(".header-link")).forEach((link) => {
    let p = link.parentNode;
    p.previousElementSibling.appendChild(link);
    p.remove();
  });
}

/**
 * Copies a page link with #id of the header that's been clicked.
 */
function add_id_copy_listeners_to_headers() {
  let h_selectors = "h1, h2, h3, h4, h5, h6";
  Array.from(document.querySelectorAll(h_selectors)).forEach((header) => {
    header.onclick = () => {
      let t = `${window.location.href}#${header.id}`;
      navigator.clipboard.writeText(t);
      console.log(`Copied "${t}" to clipboard`);
    };
  });
}