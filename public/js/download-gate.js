/**
 * Entry from /download/?app=rider|driver — routes by device class.
 */
(function () {
  var D = window.NisuDownload || {};
  var params = new URLSearchParams(window.location.search || '');
  var app = params.get('app') === 'driver' ? 'driver' : 'rider';
  var ua = navigator.userAgent || '';
  var IOS = /iPhone|iPad|iPod/i.test(ua);
  var ANDROID = /Android/i.test(ua);
  var iosUrl = app === 'driver' ? D.driverAppStoreUrl : D.riderAppStoreUrl;

  if (IOS) {
    window.location.replace(iosUrl || D.riderAppStoreUrl);
    return;
  }
  if (ANDROID) {
    window.location.replace('/download/android?app=' + encodeURIComponent(app));
    return;
  }
  window.location.replace('/download/scan?app=' + encodeURIComponent(app));
})();
