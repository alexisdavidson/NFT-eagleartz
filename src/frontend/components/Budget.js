import {  Row, Col } from 'react-bootstrap'
import skull1 from './assets/Image2.svg'
import skull2 from './assets/Image3.svg'
import skull3 from './assets/Image4.svg'

const Budget = () => {
    return (
        <Row className="collectionbg">
            <Row className="collection">
                <Row>
                    <h1 className="mb-5" id="werabbits">COLLECTIONS</h1>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={skull1} />
                        </Row>
                        <Row>
                            <div className="collectionItemText">ALLY</div>
                        </Row>
                    </Col>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={skull2} />
                        </Row>
                        <Row>
                            <div className="collectionItemText">FREAKY</div>
                        </Row>
                    </Col>
                    <Col className="collectionItem col-12 col-lg-6 col-xl-4">
                        <Row>
                            <img src={skull3} />
                        </Row>
                        <Row>
                            <div className="collectionItemText">SINGLY</div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <div className="CollectionDescription">
                        Let’s break it up. <span className="pinkTextColor">It’s simple.</span><br/>
                        <span className="boldText">ALLY</span> is a generative collection of 10k. (FREE)<br/>
                        <span className="boldText">FREAKY</span> is a generative collection of 10k. (0.03ETH)<br/>
                        <span className="boldText">SINGLY</span> is a 1/1 made collection of 60. (0.1ETH)
                    </div>
                </Row>
            </Row>
        </Row>
    );
}
export default Budget