export function replaceLocation(newLocation) {
  // Check if the browser supports the HTML5 History API
  if (history.replaceState) {
    // Replace the current state with the new hash
    history.replaceState(null, null, newLocation);
  } else {
    // Fallback for older browsers
    window.location.hash = newLocation;
  }
}