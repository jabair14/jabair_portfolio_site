import Carousel from 'react-bootstrap/Carousel';
import githubLogo from '../GitHub-Mark-Light-32px.png'


function CarouselDiv (){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i1.sndcdn.com/avatars-000749550670-vg2ycn-t500x500.jpg"
                        alt="First slide"
                        height="600px"
                        width="300px"
                    />
                    <Carousel.Caption>
                        <h3>SoundClash</h3>
                        <p>Online market place for musicians and sound designers.</p>
                        <a href="https://github.com/jabair14/soundclash-frontend">
                            <img src={githubLogo} alt="githubIcon" className="githubIcon">
                            </img>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i1.sndcdn.com/avatars-000749550670-vg2ycn-t500x500.jpg"
                        alt="Second slide"
                        height="600px"
                        width="300px"
                    />

                    <Carousel.Caption>
                        <h3>Brewmaster</h3>
                        <p>Review and rating platform for beers.</p>
                        <a href="https://github.com/jabair14/brewmaster">
                            <img src={githubLogo} alt="githubIcon" className="githubIcon">
                            </img>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i1.sndcdn.com/avatars-000749550670-vg2ycn-t500x500.jpg"
                        alt="Third slide"
                        height="600px"
                        width="300px"
                    />

                    <Carousel.Caption>
                        <h3>Booker</h3>
                        <p>A Booking and scheduling app for DJs</p>
                        <a href="https://github.com/jabair14/react-booker-frontend">
                            <img src={githubLogo} alt="githubIcon" className="githubIcon">
                            </img>
                        </a>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselDiv