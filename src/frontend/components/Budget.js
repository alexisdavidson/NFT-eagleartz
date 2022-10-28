import {  Row, Col } from 'react-bootstrap'
import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'

const Budget = () => {
    return (
        <Row className="collectionbg">
            <Row className="collection">
                <Row>
                    <h1 className="mb-5" id="werabbits">Stop being limited. Collections launching for <span className="blueTextColor">EVERY BUDGET.</span></h1>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={a1} />
                        </Row>
                        <Row>
                            <div className="collectionItemHeader">FREE</div>
                        </Row>
                        <Row>
                            <div className="collectionItemText">10.000</div>
                        </Row>
                    </Col>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={a2} />
                        </Row>
                        <Row>
                            <div className="collectionItemHeader">0.05 ETH</div>
                        </Row>
                        <Row>
                            <div className="collectionItemText">10.000</div>
                        </Row>
                    </Col>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={a3} />
                        </Row>
                        <Row>
                            <div className="collectionItemHeader">0.10 ETH</div>
                        </Row>
                        <Row>
                            <div className="collectionItemText">60</div>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Row>
    );
}
export default Budget