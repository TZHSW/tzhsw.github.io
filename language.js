const languageControls = document.querySelector('.languages');
const translated = [...document.querySelectorAll('[data-en]')];
const buttons = [...languageControls.querySelectorAll('button')];

for (const element of translated) {
  element.dataset.zh = element.textContent;
}

function changeLanguage(language) {
  document.documentElement.lang = language;
  for (const element of translated) {
    element.textContent = language === 'en' ? element.dataset.en : element.dataset.zh;
  }
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    changeLanguage(button.dataset.lang);
    try { localStorage.setItem('language', button.dataset.lang); } catch {}
  });
}
try {
  if (localStorage.getItem('language') === 'en') changeLanguage('en');
} catch {}
languageControls.hidden = false;
