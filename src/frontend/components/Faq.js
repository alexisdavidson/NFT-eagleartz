import { Image, Row, Col } from 'react-bootstrap'
import greenArrow from './assets/greenArrow.svg'

const Faq = () => {
    const toggleSection = (id) => {
        console.log("toggleSection " + id)

        var element = document.getElementById("description-" + id);

        if (element.classList.contains("faqdescriptionhidden")) {
            element.classList.remove("faqdescriptionhidden");
            element.classList.add("faqdescriptionshown");
        }
        else {
            element.classList.remove("faqdescriptionshown");
            element.classList.add("faqdescriptionhidden");
        }
    }

    return (
        <Row className="faq">
            <Col className="text-light">
                <h1 className="faqheader" id="mint">FAQ</h1>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle" onClick={() => toggleSection(1)}><img className="faqarrow" src={greenArrow} />How to buy it on smartphone?</div>
                    <div id="description-1" className="faqdescription faqdescriptionhidden">
                        1. Open Opensea<br/>
                        2. Click on search Tab<br/>
                        3. Write „AiAvatars“<br/>
                        4. Purchase your Avatar
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle" onClick={() => toggleSection(2)}><img className="faqarrow" src={greenArrow} />What do I need to do to purchase my first NFT?</div>
                    <div id="description-2" className="faqdescription faqdescriptionhidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle" onClick={() => toggleSection(3)}><img className="faqarrow" src={greenArrow} />Will there be giveaways?</div>
                    <div id="description-3" className="faqdescription faqdescriptionhidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle" onClick={() => toggleSection(4)}><img className="faqarrow" src={greenArrow} />What is the true future of WE&ME?</div>
                    <div id="description-4" className="faqdescription faqdescriptionhidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
                <Row className="faqrow" style={{textAlign: "left"}}>
                    <div className="faqtitle" onClick={() => toggleSection(5)}><img className="faqarrow" src={greenArrow} />How do I know that an avatar is rare?</div>
                    <div id="description-5" className="faqdescription faqdescriptionhidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Row>
            </Col>
        </Row>
    );
}
export default Faq