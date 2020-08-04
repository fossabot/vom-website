$(document).ready(function() {
  let db = firebase.firestore();
  // Track page load
  db.collection('page_loads').add({
    page_path: window.location.pathname,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
});
