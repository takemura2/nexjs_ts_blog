import { GetServerSideProps } from "next";


type Props = {
  title?: string;
  num?: number;
};


export default (props: Props) => {
  return (
    <>
      <h1>Test Page</h1>
      <h2>
        {props.title}:{props.num}
      </h2>
    </>
  );
};


// サーバサイドで実行する処理(getServerSideProps)を定義する
export const getServerSideProps: GetServerSideProps = async (context) => {
  // APIやDBからのデータ取得処理などを記載

  
  const props: Props = {
    title: "testtitle",
    num: 123,
  };

  return {
    props: props,
  };
};