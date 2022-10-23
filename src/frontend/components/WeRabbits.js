
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/Image1.svg'
import logo from './images/logo.png'

const WeRabbits = () => {
    return (
        <Row className="werabbits">
            <Col className="col-12 col-lg-6">
                <img src={skull} alt="Presentation image" />
            </Col>
            <Col className="ps-5 my-auto col-12 col-lg-6 text-light">
                <Row className="pinkText">
                    <div style={{
                        textAlign: "left"
                    }}>
                        WE RABBITS
                    </div>
                </Row>
                <Row>
                    <p style={{
                        textAlign: "left",
                        fontSize: "20px"
                    }}>
                        Is the first season of this art project, it includes ALLY, FREAKY & SINGLY collections.
                        <br/><br/>
                        Be a part of a historical family about art.
                    </p>
                </Row>
            </Col>
        </Row>
    );
}
export default WeRabbits