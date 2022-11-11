
import { Image, Row, Col, Button } from 'react-bootstrap'
import skull from './assets/r1.png'
import a1 from './assets/a1.svg'

const Ally = () => {
    return (
        <Row className="">
            <Row className="top mx-auto mt-5">
                <Row className="m-auto" style={{width: "auto"}}>
                    <Col className="m-auto col-12 col-lg-6 text-light">
                        <Row className="m-auto" style={{width: "auto"}}>
                            <Col className="m-auto" style={{textAlign: "left"}}>
                                <Image src={a1} className="allyimage" />
                            </Col>
                        </Row>
                        <Row className="pt-3 bigText">
                            <p id="collections" className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                                <span className="blueTextColor">ALLY COLLECTIONS</span> can be minted for free as long as you have we coins, which you can earn with your reference link.
                            </p>
                        </Row>
                        <Row className="pt-3">
                            <p className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                                *10 000 every season, generative<br/>
                                <span style={{fontWeight: "bold", fontStyle: "italic"}}>COMING SOON!</span>
                            </p>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <img className="topimage" src={skull} alt="Presentation image"/>
                    </Col>
                </Row>
            </Row>
        </Row>
    );
}
export default Ally