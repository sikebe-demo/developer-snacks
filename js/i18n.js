// Simple i18n implementation
const i18n = {
    currentLanguage: 'en',
    translations: {
        en: {
            title: "Developer Snacks",
            description: "A collection of useful tools and resources for developers. This application demonstrates internationalization (i18n) support.",
            features: {
                title: "Features",
                item1: {
                    title: "Multilingual Support",
                    description: "Switch between English and Japanese seamlessly."
                },
                item2: {
                    title: "Easy to Use",
                    description: "Simple interface with instant language switching."
                },
                item3: {
                    title: "Responsive Design",
                    description: "Works perfectly on desktop and mobile devices."
                }
            }
        },
        ja: {
            title: "Developer Snacks",
            description: "開発者向けの便利なツールとリソースのコレクションです。このアプリケーションは国際化（i18n）サポートを実装しています。",
            features: {
                title: "機能",
                item1: {
                    title: "多言語対応",
                    description: "英語と日本語をシームレスに切り替えられます。"
                },
                item2: {
                    title: "使いやすい",
                    description: "シンプルなインターフェースで即座に言語を切り替えられます。"
                },
                item3: {
                    title: "レスポンシブデザイン",
                    description: "デスクトップとモバイルデバイスで完璧に動作します。"
                }
            }
        }
    },
    
    // Get translation by key path (e.g., "features.item1.title")
    t: function(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (let k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value || key;
    },
    
    // Change language
    changeLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            return true;
        }
        return false;
    },
    
    // Get current language
    getLanguage: function() {
        return this.currentLanguage;
    }
};

