import React from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/dispo.module.css";
import OneCard from "./OneCard";

const CardsDipo = ({ articleList, format, t }) => {
  let multiNumber = [];
  for (let i = 1; i < articleList.length; i++) {
    multiNumber.push(
      Math.floor(
        Math.random(Math.floor(articleList.length)) * articleList.length
      )
    );
  }
  multiNumber = [...new Set(multiNumber)].slice(0, 5);
  return (
    <>
      <Row className={styles.position}>
        <h3 className={styles.otherTitle}>{format}</h3>
      </Row>
      <Row className={styles.position}>
        <div className={styles.columnDirection}>
          {multiNumber.map((item) => {
            const article = articleList[item];
            return <OneCard articleList={article} format={format} />;
          })}
          <Link className={styles.link} to={`/${format}`}>
            <Button color="warning" className="mb-5">
              {t("more")}
            </Button>
          </Link>
        </div>
      </Row>
    </>
  );
};
export default CardsDipo;
