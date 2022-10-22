import { Image, Row, Col } from 'react-bootstrap'
import ReactFaq from "react-faq-component";

const Faq = () => {
    const data = {
        rows: [
            {
                title: <span style={{fontWeight: "bold"}}>How to buy it on smartphone?</span>,
                content: `NFT is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain`,
            },
            {
                title: <span style={{fontWeight: "bold"}}>What do I need to do to purchase my first NFT?</span>,
                content:
                    "Skoodle is 4000 skull art NFT collection. Every skoodle is unique.",
            },
            {
                title: <span style={{fontWeight: "bold"}}>Will there be giveaways?</span>,
                content: `Skoodle NFT is a long journey. First 500 skoodle holders can get whitelist for stage two skulllab project. Stage one 4000 skoodle holders will randomly get free mint chances for future project.
                <br/>There will be more giveaway and amazing content coming up in the future.`,
            },
            {
                title: <span style={{fontWeight: "bold"}}>What is the true future of WE&ME?</span>,
                content: "0.01 for WL holders, 0.03 for presale, 0.03 for public sale. Each person can mint up to 5 skoodles.",
            },
            {
                title: <span style={{fontWeight: "bold"}}>How do I know that an avatar is rare?</span>,
                content: "0.01 for WL holders, 0.03 for presale, 0.03 for public sale. Each person can mint up to 5 skoodles.",
            },
        ],
    };

    const styles = {
        bgColor: 'rgb(0,0,0,0)',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        // arrowColor: "white",
        textAlign: "left"
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <Row className="my-5 p-3">
            <Col className="text-light">
                <h1 id="mint">FAQ</h1>
                <Row style={{textAlign: "left"}}>
                    <ReactFaq data={data} styles={styles} config={config} />
                </Row>
            </Col>
        </Row>
    );
}
export default Faq