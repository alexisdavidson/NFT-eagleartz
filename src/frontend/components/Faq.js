import { Image, Row, Col } from 'react-bootstrap'
import ReactFaq from "react-faq-component";
import greenArrow from './assets/greenArrow.svg'

const Faq = () => {
    const data = {
        rows: [
            {
                title: <span className="faqTitle">How to buy it on smartphone?</span>,
                content: <span className="faqContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            },
            {
                title: <span className="faqTitle">What do I need to do to purchase my first NFT?</span>,
                content:
                <span className="faqContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            },
            {
                title: <span className="faqTitle">Will there be giveaways?</span>,
                content: <span className="faqContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            },
            {
                title: <span className="faqTitle">What is the true future of WE&ME?</span>,
                content: <span className="faqContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            },
            {
                title: <span className="faqTitle">How do I know that an avatar is rare?</span>,
                content: <span className="faqContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            }
        ],
    };

    const styles = {
        bgColor: 'rgb(0,0,0,0)',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        arrowColor: "#00e4a7",
        textAlign: "left"
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
        borderBottom: "#00e4a7"
    };

    return (
        <Row className="faq">
            <Col className="text-light">
                <h1 className="mb-5" id="mint">FAQ</h1>
                <Row style={{textAlign: "left"}}>
                    <ReactFaq data={data} styles={styles} config={config} />
                </Row>
            </Col>
        </Row>
    );
}
export default Faq