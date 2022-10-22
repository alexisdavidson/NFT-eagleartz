
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/Image1.svg'
import logo from './images/logo.png'

const WeRabbits = () => {
    return (
        <Row className="mt-5 p-3">
            <Col className="col-12 col-lg-6">
                <img src={skull} alt="Presentation image" />
            </Col>
            <Col className="col-12 col-lg-6 text-light">
                <Row className="my-4">
                    <p style={{
                        textAlign: "left",
                        fontSize: "7vh"
                    }}>
                        WE RABBITS
                    </p>
                </Row>
                <Row className="my-5">
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