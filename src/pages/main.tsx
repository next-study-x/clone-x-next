// import '../styles/global.css'; // 전역 스타일 임포트

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Main.module.css';

const Main: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>엑수 메인 페이지</title>
        <meta name="description" content="엑수 메인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 좌측 영역 */}
      <aside className={styles.sidebar}>
        <nav>
          <Image src="/logo.svg" alt="X Logo" width={50} height={50} />
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li>Communities</li>
            <li>Profile</li>
            <li>More</li>
          </ul>
          <button className={styles.postButton}>Post</button>
          {/* 프로필 섹션 */}
          <div className={styles.profile}>
            <Image src="/profile.jpg" alt="Img" width={40} height={40} className={styles.profileImage} />
            <div>
              <p className={styles.profileName}>이름</p>
              <p className={styles.profileId}>@아이디</p>
            </div>
          </div>
        </nav>
      </aside>

      {/* 중앙 영역 */}
      <main className={styles.feed}>
        <div className={`${styles.feedHeader} ${scrolled ? styles.scrolled : ''}`}>
          <h1>For You</h1> <h1>Following</h1>
        </div>
        <div className={styles.feedContent}>
        <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>          <p>What is happening?!</p>
        <p>What is happening?!</p>
          {/* 나머지 콘텐츠 */}
        </div>
      </main>

      {/* 우측 영역 */}
      <aside className={styles.trends}>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.trendsBox}>
          <h2>Trends for you</h2>
          {/* 트렌드 목록 */}
        </div>
      </aside>
    </div>
  );
}

export default Main;
