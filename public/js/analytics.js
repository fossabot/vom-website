$(document).ready(function() {
  let db = firebase.firestore();
  // Check query string for QR code referral
  // Each QR code we distribute (e.g. on a poster) has a unique ID
  const qrId = (new URL(document.location)).searchParams.get('qr');
  // Remove query string
  window.history.replaceState(null, null, window.location.pathname);
  if (qrId != null) {
    // Track QR code referral

    const now = firebase.firestore.Timestamp.now().toMillis();
    // Saves date instead of full timestamp to respect user privacy
    // QR codes are often associated with location data, and saving a full timestamp might allow users to be indirectly identified.
    const date = now - now % 86400000;
    db.collection('qr_referrals').add({
      page_path: window.location.pathname,
      qr_id: qrId,
      date: firebase.firestore.Timestamp.fromMillis(date),
    });
  }
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
