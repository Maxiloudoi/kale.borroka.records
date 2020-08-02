import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "../Styles/pageShop.module.css";

import article from "./marchandise/Lp";
import CardArticle from "./CardArticle";
import PaginationDistro from "../Function/pagination";
import Footer from "../Footer/Footer";

class LpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "1",
            cardsPerPage: "9",
        };
    }
    render() {
        const { currentPage, cardsPerPage } = this.state;
        const indexLastCards = currentPage * cardsPerPage;
        const indexFirstCards = indexLastCards - cardsPerPage;
        const currentCards = article.slice(indexFirstCards, indexLastCards);

        const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        const pageNext = () => this.setState({ currentCards: currentPage + 1 });
        const pagePrev = () => this.setState({ currentCards: currentPage - 1 });
        const format = "LP";

        return (
            <div>
                <Container>
                    <Breadcrumb className={styles.breadCrumb} listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem active tag="span">
                            LP &amp; 10"
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <Col>
                        <Row>
                            <h1 className={styles.title}>
                                Tous nos LP &amp; 10"
                            </h1>
                            <Row className="md-auto">
                                {currentCards.map((item) => {
                                    return item.quantity > 0 ? (
                                        <div className={styles.position}>
                                            <CardArticle {...item} />
                                        </div>
                                    ) : (
                                        ""
                                    );
                                })}
                            </Row>
                        </Row>
                        <Row>
                            <PaginationDistro
                                cardsPerPage={cardsPerPage}
                                totalCards={article}
                                paginate={paginate}
                                pageNext={pageNext}
                                pagePrev={pagePrev}
                                currentPage={currentPage}
                                format={format}
                            />
                        </Row>
                    </Col>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default LpList;
