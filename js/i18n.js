// Initialize i18next with translations
const translations = {
    en: {
        translation: {
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
        }
    },
    ja: {
        translation: {
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
    }
};

// Initialize i18next
i18next.init({
    lng: 'en', // default language
    debug: false,
    resources: translations
}, function(err, t) {
    // Update content after initialization
    updateContent();
});
