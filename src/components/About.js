import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function About () {
    return (
        <>
        <h1> About Page </h1>
        <Image src="https://i1.sndcdn.com/avatars-000749550670-vg2ycn-t500x500.jpg" fluid />
        <br></br>
        <br></br>

            <Container>
                <Row>
                    <Col>
                    Experienced in Ruby on Rails, JavaScript, and React based programming with a background 
                    in music production and music education. Possess strong skills in project management and 
                    collaboration that help innovative companies meet sales goals and further expand their client base. 
                    Over the past decade as a small business owner and independent musician I learned to code in order 
                    to help other artists diversify their revenue streams and create more ways to generate income 
                    for independent musicians.
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;