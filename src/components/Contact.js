import githubLogo from '../github-sign.png';
import linkedinLogo from '../linkedin.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Contact () {
    return (
        <>
        <h1> Contact </h1>
        <p> I would love to connect with you further, message me on LinkedIn or 
            checkout some of my repo's on Github!</p>
        <br></br>
        <Container>
                <Row>
                    <Col>
                        <h3 style={{fontFamily: "'Bebas Neue', cursive"}}> Github </h3>
                        <a href="https://github.com/jabair14/">
                            <img src={githubLogo} 
                                alt="githubIcon" 
                                className="githubContact"
                            >
                            </img>
                        </a>
                   
                    </Col>
                    <Col>
                        <h3 style={{fontFamily: "'Bebas Neue', cursive"}}> LinkedIn </h3>
                        <a href="https://www.linkedin.com/in/jabairkhan/">
                            <img src={linkedinLogo} 
                                alt="linkedin" 
                                className="linkedinlogo"
                            >
                            </img>
                        </a>
                   
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;