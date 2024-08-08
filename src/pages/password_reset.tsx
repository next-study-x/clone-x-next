import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/PasswordReset.module.css';

const PasswordReset: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.container}>
            <Head>
                <title>비밀번호 재설정</title>
                <meta name="description" content="Password reset page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={() => window.history.back()}>
                        &times;
                    </button>
                    <div className={styles.content}>
                        <h2>내 X 계정 찾기</h2>
                        <p>비밀번호를 변경하려면 계정에 연결된 이메일, 전화번호 또는 사용자 아이디를 입력해 주세요.</p>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="이메일, 전화번호 또는 사용자 아이디"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            className={`${styles.nextButton} ${styles.button}`}
                            disabled={!inputValue}
                        >
                            다음
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PasswordReset;