import './Home.css'
import { Row, Col, Container } from 'react-bootstrap';

import AppLogo from "../../Images/Icons/Logo.png"
import image2 from "../../Images/image2.jfif"
import image3 from "../../Images/image3.jfif"
import specialStoryImage from '../../Images/specialStory.jfif'
import homeAboutImage from '../../Images/HomeAboutImage.png'


function Home() {


    return <>
        <Container className='home' >
            <Row className="header">
                <Col className="logo" xs sm md lg={7}>
                    <img src={AppLogo} alt="Applogo" width='102px' height='52px' />
                </Col>
                <Col >
                    <Row className="pages" xs sm md lg={5}>
                        <Col className='pageName'>Home</Col>
                        <Col className='pageName'>About us</Col>
                        <Col className='pageName'>Blog</Col>
                        <Col className='pageName'>Explore</Col>
                        <Col className='pageName'>Contact us</Col>
                    </Row>
                </Col>
            </Row>
            <Row className='homeBody'>
                <Col className='homeBodyContent' >
                    <h1>Travel Begins!</h1>
                    <p>For real travel bloggers looking to share their adventure with the world.</p>
                    <button className='Letsgobutton'>Lets Go</button>
                </Col>

            </Row>
            <Row className='homeAboutRow'>
                <Col xs sm md lg xl xxl={4} className='homeAboutContent' >
                    <h1 className='homeAboutContentHeader'>Who we are</h1>
                    <p>Four website is dedicated to providing information about the beautiful state of
                        Tamil Nadu, located in southern India. We strive to be the go-to resource for
                        travelers who are looking to explore the diverse cultures, history,
                        and natural beauty of Tamil Nadu.<br /><br />
                        Whether you are interested in ancient temples, stunning beaches, flavorful cuisine,
                        or vibrant festivals, we have something for everyone. We aim to inspire and
                        inform travelers from all over the world to discover the wonders of Tamil Nadu.</p>
                    <button className='Letsgobutton'>Lets Go</button>
                </Col>
                <Col xs sm md lg={5} className='homeAboutImage'>
                    <Row >
                        <div className='images' >
                            <img className='image1' src={homeAboutImage} />
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='homeSpecialStory'>
                    <div className='SpecialStoryheader1'>
                        Special Story
                    </div>
                    <div className='SpecialStoryheader2'>
                        The Story of Tamilnadu
                    </div>
                    <div className='SpecialStoryheader3'>
                        What you haven't know about Tamilnadu
                    </div>
                    <div className='SpecialStoryContent'>
                        <p>A group of passionate travellers came together with anshared love for exploring the beautiful state of Tamilnadu.
                            They had all experienced the incedible hospitality, rich culture and natural beauty of Tamilnadu and they
                            wanted to share their love for the state with the world
                        </p>

                    </div>
                    <div className='SpecialStoryButton'>
                        <button>MORE STORY</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
export default Home