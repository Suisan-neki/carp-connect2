import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';

I18n.putAndMergeTranslations(translations);
I18n.setLanguage('ja');

export default function Login() {
  return (
    <Authenticator
      formFields={{
        signUp: {
          username: {
            label: 'ユーザー名',
            placeholder: 'ユーザー名を入力してください',
            required: true,
          },
          password: {
            label: 'パスワード',
            placeholder: 'パスワードを入力してください',
            required: true,
          },
          email: {
            label: 'メールアドレス',
            placeholder: 'メールアドレスを入力してください',
            required: true,
          },
          birthdate: {
            label: '生年月日',
            placeholder: 'YYYY-MM-DD',
            required: true,
          },
          gender: {
            label: '性別',
            placeholder: '性別を入力してください',
            required: true,
          },
          given_name: {
            label: '名',
            placeholder: '名を入力してください',
            required: true,
          },
          family_name: {
            label: '姓',
            placeholder: '姓を入力してください',
            required: true,
          },
          phone_number: {
            label: '電話番号',
            placeholder: '+81XXXXXXXXXX',
            required: true,
          },
        },
      }}
    >
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