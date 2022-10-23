
import { Image, Row, Col } from 'react-bootstrap'
import skull from './assets/Image1.svg'
import logo from './images/logo.png'
import styled from "styled-components";

const RarityTable = () => {
    return (
        <Row className="raritytable">
            <h1 className="mb-5" id="raritytable">RARITY TABLE</h1>
            <Row className="rarityrow" style={{fontWeight: "bold", textAlign:"left"}}>
                <Col>
                    <span style={{color: "#00e4a7", fontSize: "5vh"}}>70%</span>
                    <span className="ms-3" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "2vh"}}>common</span>
                </Col>
                <Col>
                    <span style={{color: "#83adff", fontSize: "5vh"}}>15%</span>
                    <span className="ms-3" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "2vh"}}>rare</span>
                </Col>
            </Row>
          <Line src={`https://file.rendit.io/n/7l74A2cVD9fZhmAD6CGq.svg`} />
            <Row className="rarityrow" style={{fontWeight: "bold", textAlign:"left"}}>
                <Col>
                    <span style={{color: "#ffc600", fontSize: "5vh"}}>10%</span>
                    <span className="ms-3" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "2vh"}}>epic</span>
                </Col>
                <Col>
                    <span style={{color: "#ff0000", fontSize: "5vh"}}>5%</span>
                    <span className="ms-3" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "2vh"}}>legendary</span>
                </Col>
            </Row>
          <Line1 src={`https://file.rendit.io/n/7l74A2cVD9fZhmAD6CGq.svg`} />
          <p>
            Mint a NFT, and see the rarities at properties tab.
            <br />
            The rarity table will stay consistent for all collections except
            SINGLY
          </p>
        </Row>
    );
}

const Text16 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  font-family: Days One;
  white-space: nowrap;
`;
const FlexRow4 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text17 = styled.div`
  color: #83adff;
  font-size: 48px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 59.52px;
  white-space: nowrap;
`;
const Line = styled.img`
  height: 1px;
  align-self: stretch;
  margin: 0px 0px 22px 0px;
`;
const ROW = styled.div`
  width: 459px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 128px 20px 0px;
`;
const Text19 = styled.div`
  color: #ffc600;
  font-size: 48px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 59.52px;
  white-space: nowrap;
`;
const Text21 = styled.div`
  color: #ff0000;
  font-size: 48px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 59.52px;
  white-space: nowrap;
`;
const Line1 = styled.img`
  height: 1px;
  align-self: stretch;
  margin: 0px 0px 61px 0px;
`;
const Paragraph6 = styled.div`
  margin: 0px 132px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-family: Montserrat;
  line-height: 18.6px;
  text-align: center;
  white-space: nowrap;
`;
export default RarityTable