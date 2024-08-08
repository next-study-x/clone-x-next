import React, { useState, useEffect } from 'react';
import styles from '../styles/SecondModal.module.css';

interface SecondModalProps {
    isOpen: boolean;
    onClose: () => void;
    inputValue: string;
}
// 이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나의 연령을 확인하세요.
const SecondModal: React.FC<SecondModalProps> = ({ isOpen, onClose, inputValue }) => {
    const [isEmail, setIsEmail] = useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });

    useEffect(() => {
        if (inputValue.includes('@')) {
            setIsEmail(true);
        } else if (inputValue.includes('-')) {
            setContact(inputValue);
        }
    }, [inputValue]);

    const isFormValid = () => {
        return name && contact && birthday.day && birthday.month && birthday.year;
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.content}>
                    <h2>계정을 생성하세요</h2>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className={styles.input}
                        placeholder={isEmail ? "이메일" : "휴대폰 번호"}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <br />
                    <a
                        href="#"
                        onClick={() => setIsEmail(!isEmail)}
                    >
                        {isEmail ? "대신 휴대폰 사용하기" : "대신 이메일 사용하기"}
                    </a>
                    <br />
                    생년월일
                    <br />
                    이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나의 연령을 확인하세요.
                    <div className={styles.birthday}>
                        <select
                            value={birthday.month}
                            onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
                        >
                            <option value="">월</option>
                            {/* Add month options */}
                        </select>
                        <select
                            value={birthday.day}
                            onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
                        >
                            <option value="">일</option>
                            {/* Add day options */}
                        </select>
                        <select
                            value={birthday.year}
                            onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
                        >
                            <option value="">년</option>
                            {/* Add year options */}
                        </select>
                    </div>
                    <button
                        className={`${styles.nextButton} ${styles.button}`}
                        onClick={onClose}
                        disabled={!isFormValid()}
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondModal;