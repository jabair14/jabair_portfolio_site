import Carousel from 'react-bootstrap/Carousel';
import githubLogo from '../GitHub-Mark-Light-32px.png';
import soundclashScreen from '../soundclash preview.png';
import bookerScreen from '../booker preview.png';


function CarouselDiv (){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={soundclashScreen}
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
                        src="https://miro.medium.com/max/1141/1*10UZM-Gn4eBNAhgU9bQpFg.jpeg"
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
                        src={bookerScreen}
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