const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang')?.substring(0, 2);

if (!lang) {
    const userLang = navigator.language;
    window.location = `${window.location}?lang=${userLang}`;
}