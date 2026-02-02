# Developer Snacks 🍿

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Developer Snacks** は、開発者向けの学習とオンボーディングを支援するインタラクティブなダッシュボードプラットフォームです。Chart.js を活用したデータビジュアライゼーションにより、学習の進捗やメトリクスを視覚的に追跡できます。

## 🎯 プロジェクト概要

Developer Snacks は「スナック」のように気軽に学べる、一口サイズの学習コンテンツを提供します。新メンバーのオンボーディング時間を短縮し、チーム全体の生産性を向上させることを目的としています。

### 主な特徴

- 📊 **ビジュアルダッシュボード**: Chart.js による美しいチャートとグラフ
- 🎓 **インタラクティブな学習**: 実践的なコーディング演習とチュートリアル
- 📈 **進捗トラッキング**: 個人とチームの学習進捗を可視化
- 🚀 **高速セットアップ**: 最小限の設定で即座に開始可能

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: モダンなスタイリングとレスポンシブデザイン
- **JavaScript (ES6+)**: インタラクティブ機能とロジック
- **[Chart.js](https://www.chartjs.org/)**: データビジュアライゼーション

## 🚀 ローカルでの実行方法

### 前提条件

- モダンなWebブラウザ（Chrome、Firefox、Safari、Edge 等）
- （オプション）Node.js と npm（開発ツール使用時）

### クイックスタート

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/sikebe-demo/developer-snacks.git
   cd developer-snacks
   ```

2. **ブラウザで開く**

   最もシンプルな方法は、HTMLファイルを直接ブラウザで開くことです：

   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```

3. **（推奨）ローカルサーバーで実行**

   開発サーバーを使用することで、より本番環境に近い動作を確認できます：

   ```bash
   # 依存関係のインストール（初回のみ）
   npm install

   # 開発サーバーの起動
   npm start
   ```

   ブラウザで `http://localhost:8080` を開いてアクセスできます。

## 📁 ディレクトリ構成

```
developer-snacks/
├── README.md              # プロジェクトのドキュメント（このファイル）
├── LICENSE                # ライセンス情報
├── package.json           # npm設定とスクリプト
├── .gitignore            # Git管理対象外ファイル
├── .editorconfig         # エディタ設定
├── .prettierrc           # Prettier設定
├── .eslintrc.json        # ESLint設定
├── index.html            # エントリーポイント
├── docs/                 # ドキュメント
│   ├── ARCHITECTURE.md   # アーキテクチャ設計
│   ├── ONBOARDING.md     # オンボーディングガイド
│   └── BRANCHING_STRATEGY.md  # ブランチ戦略
├── src/                  # ソースコード
│   ├── styles/           # CSSファイル
│   │   └── main.css
│   └── scripts/          # JavaScriptファイル
│       └── main.js
└── .github/              # GitHub設定
    ├── workflows/        # CI/CDワークフロー
    ├── ISSUE_TEMPLATE/   # Issue テンプレート
    └── PULL_REQUEST_TEMPLATE.md  # PR テンプレート
```

> **注**: 現在はプロジェクト初期段階のため、一部のディレクトリやファイルは今後作成予定です。

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します！コントリビュートする前に、以下のドキュメントをご確認ください：

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - コントリビューションガイドライン（作成予定）
  - 開発環境のセットアップ
  - コーディング規約
  - コミットメッセージ規則
  - プルリクエストの作成手順

- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** - 行動規範（作成予定）

## 📝 ライセンス

このプロジェクトは [MIT License](./LICENSE) の下で公開されています（作成予定）。

## 🔗 関連リンク

- [Chart.js 公式ドキュメント](https://www.chartjs.org/docs/latest/)
- [プロジェクト Issue トラッカー](https://github.com/sikebe-demo/developer-snacks/issues)

## 📮 サポート

質問やフィードバックがある場合は、[Issue](https://github.com/sikebe-demo/developer-snacks/issues) を作成してください。

---

**Happy Coding! 🚀**