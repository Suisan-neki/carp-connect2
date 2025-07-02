"use client";

// import dynamic from 'next/dynamic';
import '@aws-amplify/ui-react/styles.css';

// const Authenticator = dynamic(
//   async () => {
//     const { Authenticator } = await import('@aws-amplify/ui-react');
//     return Authenticator;
//   },
//   { ssr: false }
// );

export default function Home() {
  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
        <main>
          {/* {user ? ( */}
            <div>
              <h1>認証をスキップしました。</h1>
              <p>ここにアプリケーションの主要コンテンツを配置してください。</p>
              {/* <button onClick={signOut}>ログアウト</button> */}
              {/* ここにログイン後のアプリケーションの主要コンテンツへのリンクなどを配置 */}
              {/* <p>あなたの情報はCognitoに保存されています。</p> */}
              {/* <button onClick={() => window.location.href = '/'}>ホームへ戻る</button> */}
            </div>
          {/* ) : ( */}
            {/* <div> */}
              {/* <h1>ログイン中...</h1> */}
            {/* </div> */}
          {/* )} */}
        </main>
    //   )}
    // </Authenticator>
  );
}
