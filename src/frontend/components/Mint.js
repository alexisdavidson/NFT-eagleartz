import { Col, Image, Row, Button, Badge } from 'react-bootstrap'
import logo from './assets/LOGO.png'
import frame from './assets/Frame.png'

const Mint = ({ web3Handler, account, nft, price, stats }) => {
    
    const mintButton = async () => {
        console.log("mint button")
        mintNFT()
    }

    const mintNFT = async () => {
        console.log("Mint nft...")
        let priceInWei = await nft.getPrice();
        console.log("Price: " + priceInWei + " wei");
        await(await nft.mint({ value: priceInWei })).wait()
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
                    <Col className="m-auto col-4" style={{textAlign: "right"}}>
                        <Image src={frame} className="allyimage" />
                    </Col>
                    <Col className="pt-5 bigText col-5">
                        <p id="collections" className="p-0" style={{textAlign: "left", fontWeight: "normal"}}>
                            First <span className="roseTextColor">FREAKY</span> collection is here!
                        </p>
                    </Col>
                    <Col className="col-3">
                    </Col>
                </Row>
                <Row className="pt-3 mx-auto">
                    <Button className="mintbutton" onClick={mintButton}>MINT</Button>
                </Row>
            </Row>
            <Row className="p-3 text-light g-0">
                <h1 className="mb-5" id="mint">PUBLIC MINT</h1>
                <p>Coming Soon...</p>
                {/* <div style={{
                    textAlign: "center"
                }}>
                    {account ? (
                    <Row className="g-0">
                        <Row className="g-0">
                            <a onClick={mintNFT}
                                target="_blank"
                                rel="noopener noreferrer">
                                <Badge pill bg="light" className="btn-lg pt-3" text="dark" style={{
                                    minWidth:"300px"
                                }}>
                                    <p style={{
                                        fontSize: "35px"
                                    }}>Buy</p>
                                    <p style={{
                                        fontSize: "20px"
                                    }}>{price != null ? price.toString() : '?'} ETH</p>
                                </Badge>
                            </a>
                        </Row>
                        <Row className="mt-3 g-0">
                            <p>Click buy to mint your NFT.</p>
                        </Row>
                        <Row className="mt-5 g-0">
                            <p style={{
                                fontSize: "18px"
                            }}>Total Minted</p>
                        </Row>
                        <Row className="g-0">
                            <a><Badge className="p-3" bg="dark" style={{
                                minWidth:"200px",
                                fontSize: "20px"
                            }}>
                                {
                                    stats == null || stats.length == 0 ? '?'
                                    :
                                    stats.count
                                } / 100</Badge></a>
                        </Row>
                    </Row>
                    ) : (
                        <Button onClick={web3Handler} variant="outline-light" className="btn-lg" style={{
                            width: "50%"
                        }}>Connect Wallet</Button>
                    )}
                </div>
                <p className="mt-5">
                    Please make sure that you are connected to the right network (Ethereum Mainnet). Please note: Once you make the purchase, you cannot undo it.
                </p> */}
            </Row>
        </Row>
        // <div className="flex justify-center">
        //     {items.length > 0 ?
        //         <div className="px-5 container">
        //             <Row xs={1} md={2} lg={4} className="g-4 py-5">
        //                 {items.map((item, idx) => (
        //                     <Col key={idx} className="overflow-hidden">
        //                         <Card>
        //                             <Card.Img variant="top" src={item.image} />
        //                             <Card.Body color="secondary">
        //                             <Card.Title>{item.name}</Card.Title>
        //                             <Card.Text>
        //                                 {item.description}
        //                             </Card.Text>
        //                             </Card.Body>
        //                             <Card.Footer>
        //                             <div className='d-grid'>
        //                                 <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
        //                                     Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
        //                                 </Button>
        //                             </div>
        //                             </Card.Footer>
        //                         </Card>
        //                     </Col>
        //                 ))}
        //             </Row>
        //         </div>
        //     : (
        //         <main style={{ padding: "1rem 0" }}>
        //             <h2>No listed assets</h2>
        //         </main>
        //     )}
        // </div>
    );
}
export default Mint