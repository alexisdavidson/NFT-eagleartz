
import { Image, Row, Col, Button } from 'react-bootstrap'
import skull from './assets/r2.png'
import a2 from './assets/a2.png'

const Freaky = () => {
    return (
        <Row className="">
            <Row className="top mx-auto mt-5">
                <Row className="m-auto" style={{width: "auto"}}>
                    <Col className="col-12 col-lg-6">
                        <img className="topimage" src={skull} alt="Presentation image"/>
                    </Col>
                    <Col className="m-auto col-12 col-lg-6 text-light">
                        <Row className="m-auto" style={{width: "auto"}}>
                            <Col className="m-auto" style={{textAlign: "right"}}>
                                <Image src={a2} className="allyimage" />
                            </Col>
                        </Row>
                        <Row className="pt-3 bigText">
                            <p className="p-0" style={{textAlign: "right", fontWeight: "normal"}}>
                                <span className="roseTextColor">FREAKY COLLECTIONS</span> 
                                <br/>pure crazy art, party mood.
                            </p>
                        </Row>
                        <Row className="pt-3">
                            <p className="p-0" style={{textAlign: "right", fontWeight: "normal"}}>
                                *10 000 every season, generative<br/>
                                <span style={{fontWeight: "bold", fontStyle: "italic"}}>MINT ABOVE!</span>
                            </p>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Row>
    );
}
export default Freaky