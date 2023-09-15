import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function HomeCard({ title, to }) {
  return (
    <Link to={to} className={styles.card}>
      <h2>{title}</h2>
    </Link>
  );
}

export default HomeCard;
