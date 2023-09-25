import React from 'react';
import HomeCard from '../../components/HomeCard/HomeCard';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <HomeCard title="Select Quiz" to="/select" />
        <HomeCard title="Create Quiz" />
      </div>
    </div>
  );
}

export default Home;
