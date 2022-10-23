
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/FREAKYsample.png'
import logo from './images/logo.png'
import Navigation from './Navbar';

const Top = ({ web3Handler, account }) => {
    return (
        <Row className="topBg">
            <Navigation web3Handler={web3Handler} account={account} />
        <Row className="top">
            <Row>
                <Col className="my-auto col-12 col-lg-6 text-light">
                    <Row className="pt-5 pinkText">
                        <p style={{
                            textAlign: "left",
                        }}>
                            <span className="greenText">UNLOCK</span> the magic of art. Join WE and become yourself 2.0
                        </p>
                    </Row>
                    <Row>
                        <p style={{
                            textAlign: "left"
                        }}>
                            WE&ME is an art project, related to streetwear and unexpected airdrops.
                        </p>
                    </Row>
                </Col>
                <Col className="col-12 col-lg-6">
                    <img src={skull} alt="Presentation image"/>
                </Col>
            </Row>
        </Row>
        </Row>
    );
}
export default Top