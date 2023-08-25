
// Function for executing code on document ready
function domReady(callback) {
  if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function domRemove(el) {
  if (el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}
