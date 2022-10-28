import { Col, Image, Row, Button, Badge } from 'react-bootstrap'
import logo from './assets/LOGO.png'
import frame from './assets/Frame.png'

const Mint = ({ web3Handler, account, nft, price, stats }) => {
    
    const mintButton = async () => {
        console.log("mint button")
        let priceInWei = await nft.getPrice();
        console.log("Price: " + priceInWei + " wei");
        // await nft.mint({ value: priceInWei }, 1)
        await nft.mint(1)
      }

    return (
        <Row className="p-0 m-0">
            <Row className="px-4 pt-4 mt-3">
                <Col className="">
                    <Image src={logo} className="ms-4 d-flex" style={{
                        width: "150px"
                    }}/>
                </Col>
                <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                </Col>
            </Row>
            
            <Row className="mx-auto mt-5">
                <Row className="m-auto">
                    <Col className="d-none d-lg-block m-auto col-12 col-lg-4" style={{textAlign: "right"}}>
                        <Image src={frame} className="allyimage" />
                    </Col>
                    <Col className="pt-5 bigText col-12 col-lg-5">
                        <p className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                            First <span className="roseTextColor">FREAKY</span> collection is here!
                        </p>
                    </Col>
                    <Col className="col-3">
                    </Col>
                </Row>
                <Row className="pt-3 mx-auto">
                    {account ? (
                        <Button className="mintbutton" onClick={mintButton}>MINT</Button>
                    ) : (
                        <Button className="mintbutton" onClick={web3Handler}>MINT</Button>
                    )}
                </Row>
            </Row>
        </Row>
    );
}
export default Mint