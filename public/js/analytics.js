$(document).ready(function() {
  let db = firebase.firestore();
  // Track page load
  db.collection('page_loads').add({
    page_path: window.location.pathname,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  // Track link clicks
  $('a').click(function(event) {
    // Prevent redirect
    event.preventDefault();
    // Send click event to database
    db.collection('link_clicks').add({
      href: event.target.href,
      page_path: window.location.pathname,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // Redirect
    window.location.href = event.target.href;
  });
});
