import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section*/}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* キャッチコピー */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            建築業のための
            <br />
            <span className="text-blue-600">顧客管理CRM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            メンテナンス時期を見逃さない
            <br />
            自動リマインダーで営業機会を最大化
          </p>

          {/* メインCTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#download"
              className="inline-block pg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded-lg transition-colors shadow-lg">
              無料ダウンロード（Windows版）
            </a>
            <a
              href="#features"
              className="inline-block bg-white hover:bg-gray-50 text-blue-600 text-xl font-bold py-4 px-8 rounded-lg border-2 border-blue-600 transition-colors">
              機能を見る
            </a>
          </div>

          {/* スクリーンショット (メイン) */}
          <div className="rounded-lg shadow-2xl overflow-hidden border-4 border-gray-200">
            <Image
              src="/screenshots/dashboard.png"
              alt="ダッシュボード画面"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* 対象ユーザー */}
          <p className="text-lg text-gray-500 mt-8">
            板金・塗装・屋根工事など建築自営業者向け
          </p>
        </div>
      </section>

      {/* 主な機能セクション */}
      <section id="features" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            主な機能
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 機能1: 顧客管理 */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/screenshots/customer-list.png"
                  alt="顧客管理画面"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg border-2 border-gray-200 w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 顧客管理
              </h3>
              <p className="text-lg text-gray-600">
                工務店・お得意先の情報を一元管理。
                <br />
                サービス履歴も簡単に記録。
              </p>
            </div>
            {/* 機能2: 自動リマインダー */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/screenshots/reminder.png"
                  alt="自動リマインダー画面"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg border-2 border-gray-200 w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⏰ 自動リマインダー
              </h3>
              <p className="text-lg text-gray-600">
                メンテナンス時期を自動判定。
                <br />
                営業機会を見逃しません。
              </p>
            </div>

            {/* 機能3: Email連携 */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/screenshots/email-sending.png"
                  alt="Email連携画面"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg border-2 border-gray-200 w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📧 Email連携
              </h3>
              <p className="text-lg text-gray-600">
                ワンクリックでリマインダーメール送信。
                <br />
                顧客へのアプローチを効率化。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            使い方は簡単3ステップ
          </h2>

          <div className="flex items-start gap-6 pb-9">
            {/* ステップ1 */}
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ダウンロード・インストール
              </h3>
              <p className="text-lg text-gray-600">
                Windows版インストーラーをダウンロードして実行。
                <br />
                数クリックで完了します。
              </p>
            </div>
          </div>

          {/* ステップ2 */}
          <div className="flex items-start gap-6 pb-9">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center">
              2
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                顧客情報を登録
              </h3>
              <p className="text-lg text-gray-600">
                工務店の会社名・連絡先を登録。
                <br />
                サービス履歴も一緒に記録できます。
              </p>
            </div>
          </div>
          {/* ステップ3 */}
          <div className="flex items-start gap-6 pb-9">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center">
              3
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                リマインダーを設定
              </h3>
              <p className="text-lg text-gray-600">
                メンテナンス予測から自動で推奨。
                <br />
                時期が来たら自動通知されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ダウロードセクション */}
      <section id="download" className="bg-blue-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            今すぐ無料で始める
          </h2>

          <p className="text-xl text-blue-100 mb-12">
            ベータ版を無料でお試しいただけます
          </p>

          <a
            href="https://github.com/[YOUR_USERNAME]/[YOUR_REPO]/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 text-2xl font-bold py-6 px-12 rounded-lg transition-colors shadow-xl">
            ⬇️ Windows版をダウンロード
          </a>

          <div className="mt-8 text-blue-100 text-lg">
            <p>対応OS: Windows 10 / 11</p>
            <p>バージョン: v1.0.0-beta</p>
            <p className="mt-4 text-sm">
              ※ インストール時にWindows Defenderの警告が出る場合がありますが、
              <br />
              「詳細情報」→「実行」で進めてください。
            </p>
          </div>
        </div>
      </section>

      {/* フィードバックセクション */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            ご意見・ご要望をお聞かせください
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            現在べータ版を開発中です。
            <br />
            皆様のフィードバックをお待ちしています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/[YOUR_FORM_ID]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600
            hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-lg
            transition-colors">
              📝 フィードバックを送る
            </a>
            <a
              href="https://github.com/[YOUR_USERNAME]/[YOUR_REPO]/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-xl font-bold py-4 px-8 rounded-lg transition-colors">
              🐛 バグ報告
            </a>
          </div>
        </div>
      </section>
      {/* フッター */}
      <footer className="bg-gray-900  text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">建築業向けCRM</h3>
              <p className="text-gray-400">
                メンテナンス時期を見逃さない
                <br />
                自動リマインダーシステム
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors">
                    機能紹介
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-white transition-colors">
                    ダウンロード
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/[YOUR_USERNAME]/[YOUR_REPO]"
                    className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <p className="text-gray-400">
                <a
                  href="mailto:your-email@example.com"
                  className="hover:text-white transition-colors">
                  your-email@example.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 text-center text-gray-400">
            <p>&copy; 2025 建築業向けCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
