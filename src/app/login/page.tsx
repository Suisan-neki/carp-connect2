import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function Login() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {user ? (
            <div>
              <h1>ログイン成功！</h1>
              <p>ようこそ、{user.username}さん！</p>
              <button onClick={signOut}>ログアウト</button>
              {/* ここにログイン後のアプリケーションの主要コンテンツへのリンクなどを配置 */}
              <p>あなたの情報はCognitoに保存されています。</p>
              <button onClick={() => window.location.href = '/'}>ホームへ戻る</button>
            </div>
          ) : (
            <div>
              <h1>ログイン中...</h1>
            </div>
          )}
        </main>
      )}
    </Authenticator>
  );
}