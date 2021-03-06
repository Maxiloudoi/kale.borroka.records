import React, { useEffect } from "react";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import production from "../Marchandise/Production";
import styles from "../../Styles/production.module.css";

const ProductionPage = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container>
        <Breadcrumb listTag="div" className={styles.breadCrumb}>
          <BreadcrumbItem tag={Link} to={"/"}>
            KALE BORROKA RECORDS
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            {t("prod")}
          </BreadcrumbItem>
        </Breadcrumb>
        <Col>
          <Row className={styles.titlePosition}>
            <h1 className={styles.title}>KALE BORROKA RECORDS</h1>
            <Row className={styles.titlePosition}>
              <Col xs={12}>
                <Table
                  className="table table-striped table-dark mb-5"
                  hover
                  responsive
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{t("titre")}</th>
                      <th>{t("format")}</th>
                      <th>{t("label")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {production.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th className={styles.link}>{item.numberProd} </th>
                          <td>
                            <Link
                              to={`/${item.format}/${item.id}`}
                              className={styles.link}
                            >
                              {item.artiste} - {item.name}{" "}
                            </Link>
                          </td>
                          <td className={styles.link}>{item.format}</td>
                          <td className={styles.link}>{item.labels} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Row>
        </Col>
      </Container>
    </div>
  );
};
export default withNamespaces()(ProductionPage);
