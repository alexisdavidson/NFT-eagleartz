import { Image, Row, Col } from 'react-bootstrap'
import ReactFaq from "react-faq-component";
import greenArrow from './assets/greenArrow.svg'

const Faq = () => {
    const data = {
        rows: [
            {
                title: <span className="faqTitle">How to buy it on smartphone?</span>,
                content: <span className="faqContent">NFT is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain</span>,
            },
            {
                title: <span className="faqTitle">What do I need to do to purchase my first NFT?</span>,
                content:
                <span className="faqContent">Skoodle is 4000 skull art NFT collection. Every skoodle is unique.</span>,
            },
            {
                title: <span className="faqTitle">Will there be giveaways?</span>,
                content: <span className="faqContent">Skoodle NFT is a long journey. First 500 skoodle holders can get whitelist for stage two skulllab project. Stage one 4000 skoodle holders will randomly get free mint chances for future project.
                <br/>There will be more giveaway and amazing content coming up in the future.</span>,
            },
            {
                title: <span className="faqTitle">What is the true future of WE&ME?</span>,
                content: <span className="faqContent">0.01 for WL holders, 0.03 for presale, 0.03 for public sale. Each person can mint up to 5 skoodles.</span>,
            },
            {
                title: <span className="faqTitle">How do I know that an avatar is rare?</span>,
                content: <span className="faqContent">0.01 for WL holders, 0.03 for presale, 0.03 for public sale. Each person can mint up to 5 skoodles.</span>,
            },
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