// Update all content with translations
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
    
    // Update active button
    updateActiveLanguageButton();
}

// Change language
function changeLanguage(lng) {
    i18next.changeLanguage(lng, function(err, t) {
        if (err) return console.log('Error changing language', err);
        updateContent();
    });
}

// Update active language button
function updateActiveLanguageButton() {
    const currentLang = i18next.language;
    document.querySelectorAll('.language-switcher button').forEach(function(btn) {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById('lang-' + currentLang);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateActiveLanguageButton();
});
