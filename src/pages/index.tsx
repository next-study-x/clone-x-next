import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';
import SecondModal from '../components/SecondModal';

const Home: React.FC = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = (value: string) => {
    setInputValue(value);
    setFirstModalOpen(false);
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);
  const goToPasswordReset = () => router.push('/password_reset');

  return (
    <div className={styles.container}>
      <Head>
        <title>엑수 복제</title>
        <meta name="description" content="Twitter clone built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <Image src="/logo.svg" alt="X Logo" width={300} height={300} />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>지금 일어나고 있는 일</h1>
          <p className={styles.description}>지금 가입하세요.</p>
          <button className={`${styles.googleButton} ${styles.button}`} onClick={openFirstModal}>Google 계정으로 가입하기</button>
          <button className={`${styles.appleButton} ${styles.button}`} onClick={openFirstModal}>Apple에서 가입하기</button>
          <div className={styles.or}>또는</div>
          <button className={`${styles.createAccountButton} ${styles.button}`} onClick={openFirstModal}>계정 만들기</button>
          <p className={styles.agreement}>
            가입하시려면 <a href="#">쿠키 사용</a>을 포함해 <a href="#">이용약관</a>과 <a href="#">개인정보 처리방침</a>에 동의해야 합니다.
          </p>
          <p>이미 엑수에 가입하셨나요?</p>
          <button className={`${styles.loginButton} ${styles.button}`}>로그인</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#">소개</a>
        <a href="#">엑수 앱 다운로드하기</a>
        <a href="#">고객센터</a>
        <a href="#">이용약관</a>
        <a href="#">개인정보 처리방침</a>
        <a href="#">쿠키 정책</a>
        <a href="#">접근성</a>
        <a href="#">광고 정보</a>
        <a href="#">블로그</a>
        <a href="#">브랜드 리소스</a>
        <a href="#">광고</a>
        <a href="#">마케팅</a>
        <a href="#">비즈니스</a>
        <a href="#">개발자</a>
        <a href="#">설정</a>
        <span>2024 엑수</span>
      </footer>

      <Modal isOpen={isFirstModalOpen} onClose={closeFirstModal} onNext={openSecondModal} />
      <SecondModal isOpen={isSecondModalOpen} onClose={closeSecondModal} inputValue={inputValue} />

    </div>
  );
}

export default Home;
