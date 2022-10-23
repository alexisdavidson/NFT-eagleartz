import {
    Link
} from "react-router-dom";

import { Image, Row, Col, Nav, Button } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import icon_os from './images/opensea.png'
import logo from './assets/WeandmeLogo.svg'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Row className="px-4 pt-4 mt-3">
            <Col className="d-none d-lg-block col-5 text-light">
                <Image src={logo} className="ms-4 d-flex" style={{
                    width: "150px"
                }}/>
            </Col>
            <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div className="d-flex justify-content-end" style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        color: "white",
                        fontSize: "1.7vh"
                    }}>
                        <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Roadmap</a>
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Story</a> */}
                        <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Collections</a>
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Team</a> */}
                        <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>FAQ</a>
                        <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Rewards</a>
                        
                    </div>
            </Col>
        </Row>
    )

}

export default Navigation;