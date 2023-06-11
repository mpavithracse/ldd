import './Home.css'
import { Row, Col } from 'react-bootstrap';

import AppLogo from "../../Images/Icons/Logo.png"

function Home() {


    return<>
    <div className="home">
        <Row className="header">
            <Col  xs sm md lg = {4} className="logo">
                <img src={AppLogo} alt = "Applogo"  width='102px' height='52px'/>
            </Col>
            <Col xs sm md lg = {8}>
            <Row className = "pages">
                <Col className='pageName'>Home</Col>
                <Col className='pageName'>About us</Col>
                <Col className='pageName'>Blog</Col>
                <Col className='pageName'>Explore</Col>
                <Col className='pageName'>Contact us</Col>
            </Row>
            </Col>
        </Row>
        <Row className='homeBody'>
            <Col className='homeBodyContent'>
                <h1>Travel Begins!</h1>
                <p>For real travel bloggers looking to share their adventure with the world.</p>
                <button className='Letsgobutton'>Lets Go</button>
            </Col>

        </Row>
    </div>
    </>
}
export default Home