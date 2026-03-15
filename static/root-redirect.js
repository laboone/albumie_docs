(function () {
  if (typeof window === 'undefined') {
    return;
  }
  var pathname = window.location.pathname;

  if (pathname !== '/' && pathname !== '') {
    return;
  }

  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('fromLocaleSwitch') === '1') {
    searchParams.delete('fromLocaleSwitch');
    var newQuery = searchParams.toString();
    var newUrl = pathname + (newQuery ? '?' + newQuery : '') + window.location.hash;
    window.history.replaceState({}, '', newUrl);
    return;
  }

  var currentLanguage = String(
    window.navigator.language || window.navigator.userLanguage || ''
  ).toLowerCase();

  var isJapanese = currentLanguage.startsWith('ja');

  if (!isJapanese) {
    window.location.replace('/en');
  }
})();
