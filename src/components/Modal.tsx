import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import { useRouter } from 'next/router';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNext: (inputValue: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onNext }) => {
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
    if (!isOpen) return null;

    const handleNext = () => {
        onNext(inputValue);
    };
    const goToPasswordReset = () => router.push('/password_reset');

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.content}>
                    <h2>엑수 가입하기</h2>
                    <button className={`${styles.googleButton} ${styles.button}`}>Google 계정으로 로그인</button>
                    <button className={`${styles.appleButton} ${styles.button}`}>Apple로 로그인하기</button>
                    <div className={styles.or}>또는</div>
                    <input type="text"
                        className={styles.input}
                        placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        className={`${styles.nextButton} ${styles.button}`}
                        onClick={handleNext}>다음
                    </button>
                    <button 
                        className={`${styles.forgotPassword} ${styles.button}`}
                        onClick={goToPasswordReset}>
                        비밀번호를 잊으셨나요?
                    </button>
                    <p className={styles.agreement}>
                        계정이 없으신가요? <a href="#">가입하기</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
