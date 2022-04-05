/**
 * Do stuff when document loads.
 */
window.addEventListener("load", function () {
  addCopyListenersToHeaders();
  appendSectionLinksToHeaders();
});

/**
 * Copies a page link with #id of the header that's been clicked.
 * Adds a span tag to contain click callbacks to current text, not anything
 * added to header later.
 */
function addCopyListenersToHeaders() {
  let h_selectors = "h2, h3, h4, h5, h6";
  Array.from(document.querySelectorAll(h_selectors)).forEach((header) => {
    let span = document.createElement("span");
    span.innerHTML = header.innerHTML;
    header.innerHTML = "";
    header.appendChild(span);
    span.onclick = () => {
      let t = `${window.location.href.replace(location.hash,"")}#${header.id}`;
      navigator.clipboard.writeText(t);
      header.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      showCopiedMessage("copy-notification");
    };
  });
}

/**
 * Re-parents any .header-link nodes
 * under its current parent's previous sibling.
 */
function appendSectionLinksToHeaders() {
  Array.from(document.querySelectorAll(".header-link")).forEach((link) => {
    let p = link.parentNode;
    p.previousElementSibling.appendChild(link);
    p.remove();
  });
}

/**
 * Shows DOM element to notify user that URL was copied to clipboard.
 */
function showCopiedMessage(message) {
  fade(message, 1, 0, 2000, new Date().getTime());
}

// https://blog.abhranil.net/2011/11/03/simplest-javascript-fade-animation/
function fade(eid, initOp, finalOp, TimeToFade, time)
{
  document.getElementById(eid).style.visibility = "visible";
  var curTick = new Date().getTime();
  var elapsedTicks = curTick - time;
  var newOp = initOp+(finalOp-initOp)*elapsedTicks/TimeToFade;
  if (Math.abs(newOp-initOp)>Math.abs(finalOp-initOp))
  {
    document.getElementById(eid).style.opacity=finalOp;
    if (finalOp==0)
    {
        document.getElementById(eid).style.visibility="hidden"
    }
    return;
  }
  document.getElementById(eid).style.opacity=newOp;
  setTimeout("fade( '" + eid + "'," + initOp + "," + finalOp + "," + TimeToFade + "," + time + ")", TimeToFade/100);
}