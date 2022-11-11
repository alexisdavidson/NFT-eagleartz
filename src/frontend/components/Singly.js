
import { Image, Row, Col, Button } from 'react-bootstrap'
import skull from './assets/r3.png'
import a3 from './assets/a3.svg'

const Singly = () => {
    return (
        <Row className="">
            <Row className="top mx-auto mt-5">
                <Row className="m-auto" style={{width: "auto"}}>
                    <Col className="m-auto col-12 col-lg-6 text-light">
                        <Row className="m-auto" style={{width: "auto"}}>
                            <Col className="m-auto" style={{textAlign: "left"}}>
                                <Image src={a3} className="allyimage" />
                            </Col>
                        </Row>
                        <Row className="pt-3 bigText">
                            <p className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                                <span className="greenTextColor">SINGLY COLLECTIONS</span> are the most special one. They are made 1/1 and are not generative. <span className="greenTextColor">ONLY 60 NFTs</span> every season.
                            </p>
                        </Row>
                        <Row className="pt-5">
                            <p className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                                *has traits that are not repeated.<br/>
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
export default Singly