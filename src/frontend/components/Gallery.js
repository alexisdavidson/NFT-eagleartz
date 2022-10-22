import {  Row, Col } from 'react-bootstrap'
import skull1 from './assets/Image2.svg'
import skull2 from './assets/Image3.svg'
import skull3 from './assets/Image4.svg'

const Gallery = () => {
    return (
        <Row className="p-3" style={{
                        fontSize: "25px"
        }}>
            <Row>
                <h1 className="mb-5" id="werabbits">COLLECTIONS</h1>
                <Col className="col-12 col-lg-6 col-xl-4 mb-4">
                    <Row>
                        <img src={skull1} />
                    </Row>
                    <Row>
                        <p>ALLY</p>
                    </Row>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-4 mb-4">
                    <Row>
                        <img src={skull2} />
                    </Row>
                    <Row>
                        <p>FREAKY</p>
                    </Row>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-4 mb-4">
                    <Row>
                        <img src={skull3} />
                    </Row>
                    <Row>
                        <p>SINGLY</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <p>
                    Let’s break it up. It’s simple.<br/>
                    ALLY is a generative collection of 10k. (FREE)<br/>
                    FREAKY is a generative collection of 10k. (0.03ETH)<br/>
                    SINGLY is a 1/1 made collection of 60. (0.1ETH)
                </p>
            </Row>
        </Row>
    );
}
export default Gallery