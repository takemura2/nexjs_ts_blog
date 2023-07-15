import { AppProps } from 'next/app'
import '../styles/index.css'
/*

_app.tsxは、Next.jsで全てのページを初期化するために使用されるAppコンポーネントをカスタマイズするためのファイルです。
このコンポーネントを継承したクラスがあるファイル、_app.tsxを作成することでデフォルトのAppコンポーネントを上書きできます。
つまり、全ページで必要な処理をここに書くことができます。

・ページ間の共通レイアウトを持たせることができる
・共通のstateを持つことができる
・グローバルなCSS (全ページ共通の)を定義できる
 
*/
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
