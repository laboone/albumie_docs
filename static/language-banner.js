var LANGUAGE_BANNER_DISMISSED_KEY = 'albumie-lang-banner-dismissed';

function isLanguageBannerDismissed() {
  try {
    return window.localStorage.getItem(LANGUAGE_BANNER_DISMISSED_KEY) === '1';
  } catch (e) {
    return false;
  }
}

function dismissLanguageBanner() {
  try {
    window.localStorage.setItem(LANGUAGE_BANNER_DISMISSED_KEY, '1');
  } catch (e) {}
}

// 強制リダイレクトはGooglebotのレンダリング時にも発火し、
// / と /en/ が同一コンテンツに見えてしまい重複ページとして扱われるため、
// クリックしないと遷移しない案内バーに留める。
function showEnglishSuggestionBanner() {
  if (isLanguageBannerDismissed() || document.getElementById('__albumie-lang-banner')) {
    return;
  }

  var banner = document.createElement('div');
  banner.id = '__albumie-lang-banner';
  banner.setAttribute('role', 'note');
  banner.style.cssText =
    'position:relative;z-index:9999;background:#1c1e21;color:#fff;' +
    'padding:10px 16px;font-size:14px;display:flex;align-items:center;' +
    'justify-content:center;gap:16px;flex-wrap:wrap;';

  var text = document.createElement('span');
  text.textContent = 'This page is also available in English.';

  var link = document.createElement('a');
  link.href = '/en';
  link.textContent = 'Switch to English';
  link.style.cssText = 'color:#8ab4ff;text-decoration:underline;';

  var close = document.createElement('button');
  close.type = 'button';
  close.textContent = '✕';
  close.setAttribute('aria-label', 'Dismiss');
  close.style.cssText = 'background:none;border:none;color:#fff;cursor:pointer;font-size:14px;line-height:1;';
  close.addEventListener('click', function () {
    banner.remove();
    dismissLanguageBanner();
  });

  banner.appendChild(text);
  banner.appendChild(link);
  banner.appendChild(close);
  document.body.prepend(banner);
}

(function () {
  if (typeof window === 'undefined') {
    return;
  }
  var pathname = window.location.pathname;

  if (pathname !== '/' && pathname !== '') {
    return;
  }

  var currentLanguage = String(
    window.navigator.language || window.navigator.userLanguage || ''
  ).toLowerCase();

  var isJapanese = currentLanguage.startsWith('ja');

  if (isJapanese) {
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showEnglishSuggestionBanner);
  } else {
    showEnglishSuggestionBanner();
  }
})();
