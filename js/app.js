// Update all content with translations
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18n.t(key);
    });
    
    // Update active button
    updateActiveLanguageButton();
}

// Change language
function changeLanguage(lng) {
    if (i18n.changeLanguage(lng)) {
        updateContent();
    }
}

// Update active language button
function updateActiveLanguageButton() {
    const currentLang = i18n.getLanguage();
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
    updateContent();
});

