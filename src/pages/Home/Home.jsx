// import React from "react";
// import { Link } from "react-router-dom";
// import ChooseQuizCard from "../../components/Cards/ChooseQuizCard";
// import CreateQuizCard from "../../components/Cards/CreateQuizCard";
// import styles from "./Home.module.css";

// function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.cardContainer}>
//         <Link to="/select">
//           <ChooseQuizCard />
//         </Link>
//         <CreateQuizCard />
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from 'react';
// import HomeCard from '../../components/HomeCard/HomeCard';
// import styles from './Home.module.css';

// function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.cardContainer}>
//         <HomeCard title="Choose Quiz" to="/select" />
//         <HomeCard title="Create Quiz" />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import HomeCard from '../../components/HomeCard/HomeCard';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <HomeCard title="Choose Quiz" to="/select" />
        <HomeCard title="Create Quiz" />
      </div>
    </div>
  );
}

export default Home;
