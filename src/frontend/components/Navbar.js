import {
    Link
} from "react-router-dom";

import { Image, Row, Col, Nav, Button } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import logo from './assets/LOGO.svg'
import { useNavigate } from "react-router-dom";

const Navigation = ({ web3Handler, account }) => {
    let navigate = useNavigate(); 

    const goHome = async () => {
        console.log("go home")
        navigate("");
    }

    return (
        <Row className="px-4 pt-4 mt-3">
            <Col className="logo d-none d-lg-block col-5 text-light">
                <Image src={logo} className="ms-4 d-flex logo" onClick={goHome} style={{
                    width: "150px"
                }}/>
            </Col>
            <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div className="d-flex justify-content-end" style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        color: "white",
                        fontSize: "0.9rem"
                    }}>
                        <a href="#raritytable" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Rarity</a>
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Story</a> */}
                        <a href="#collections" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Collections</a>
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Team</a> */}
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>FAQ</a> */}
                        {/* <a href="#roadmap" style={{ color: "white", textDecoration: "none", paddingRight: "15px" }}>Rewards</a> */}
                        <a href="https://twitter.com/weandmeszn" target="_blank" className="py-0 ps-2">
                            <Image src={icon_tw} width="30" height="30" className="p-0"/>
                        </a>
                        
                        
                    </div>
            </Col>
        </Row>
    )

}

export default Navigation;