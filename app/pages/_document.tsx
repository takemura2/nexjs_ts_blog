import { Html, Head, Main, NextScript } from 'next/document'

/*

Documentはhtmlタグやbodyタグの定義を行うコンポーネントです。
全ページ共通でheadタグ内で読み込みしたい場合などはDocumentコンポーネントをカスタマイズすることで実装します。
Documentコンポーネントは./page/_document.jsにファイルを作ることでカスタマイズできます。
また、Documentコンポーネントはブラウザでは実行されません。サーバサイドでのみ実行されます。

*/

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
