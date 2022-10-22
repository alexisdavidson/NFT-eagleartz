
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/FREAKYsample.png'
import logo from './images/logo.png'

const Top = () => {
    return (
        <Row className="top p-3">
            <Col className="col-12 col-lg-6 text-light">
                <Row className="my-4">
                    <p style={{
                        textAlign: "left",
                        fontSize: "6vh"
                    }}>
                        UNLOCK the magic of art. Join WE and become yourself 2.0
                    </p>
                </Row>
                <Row className="my-5">
                    <p style={{
                        textAlign: "left",
                        fontSize: "20px"
                    }}>
                        WE&ME is an art project, related to streetwear and unexpected airdrops.
                    </p>
                </Row>
            </Col>
            <Col className="col-12 col-lg-6">
                <img src={skull} alt="Presentation image" />
            </Col>
        </Row>
    );
}
export default Top