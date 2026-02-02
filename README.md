# developer-snacks

A simple web application demonstrating internationalization (i18n) support.

## Features

- 🌍 **Internationalization**: Supports multiple languages (English and Japanese)
- 🔄 **Easy Language Switching**: Switch between languages with a single click
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Clean UI**: Simple and intuitive interface

## Supported Languages

- English (en)
- Japanese (ja) - 日本語

## Getting Started

### Running the Application

1. Start a local server:
   ```bash
   npm run serve
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Project Structure

```
developer-snacks/
├── index.html          # Main HTML file
├── js/
│   ├── i18n.js        # Custom i18n implementation and translations
│   └── app.js         # Application logic
├── locales/
│   ├── en.json        # English translations
│   └── ja.json        # Japanese translations
├── package.json        # Project configuration
└── README.md          # This file
```

## How It Works

The application uses a custom lightweight i18n implementation:

1. **Translation Files**: Language strings are defined in `js/i18n.js` and also available as separate JSON files in the `locales/` directory
2. **Language Switching**: Click the language buttons at the top to switch between English and Japanese
3. **Dynamic Updates**: All text content updates instantly when changing languages

## Adding New Languages

To add a new language:

1. Add translations to `js/i18n.js` in the `translations` object
2. Create a new JSON file in `locales/` (e.g., `locales/fr.json` for French)
3. Add a language button in `index.html`

## License

MIT License - see [LICENSE](LICENSE) file for details