
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/FREAKYsample.png'
import logo from './images/logo.png'
import Navigation from './Navbar';

const Top = ({ web3Handler, account }) => {
    return (
        <Row className="top">
            <Navigation web3Handler={web3Handler} account={account} />
            <Row className="my-auto">
                <Col className="my-auto col-12 col-lg-6 text-light">
                    <Row className="my-auto pinkText">
                        <p style={{
                            textAlign: "left",
                            fontSize: "6vh"
                        }}>
                            <span className="greenText">UNLOCK</span> the magic of art. Join WE and become yourself 2.0
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
        </Row>
    );
}
export default Top