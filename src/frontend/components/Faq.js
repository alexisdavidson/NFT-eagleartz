import { Image, Row, Col } from 'react-bootstrap'
import greenArrow from './assets/greenArrow.svg'

const Faq = () => {
    return (
        <Row className="faq">
            <Col className="text-light">
                <h1 className="faqheader" id="mint">FAQ</h1>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle"><img className="faqarrow" src={greenArrow} />How to buy it on smartphone?</div>
                    <div className="faqdescription">
                        1. Open Opensea<br/>
                        2. Click on search Tab<br/>
                        3. Write „AiAvatars“<br/>
                        4. Purchase your Avatar
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle"><img className="faqarrow" src={greenArrow} />What do I need to do to purchase my first NFT?</div>
                    <div className="faqdescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle"><img className="faqarrow" src={greenArrow} />Will there be giveaways?</div>
                    <div className="faqdescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle"><img className="faqarrow" src={greenArrow} />What is the true future of WE&ME?</div>
                    <div className="faqdescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle"><img className="faqarrow" src={greenArrow} />How do I know that an avatar is rare?</div>
                    <div className="faqdescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
            </Col>
        </Row>
    );
}
export default Faq