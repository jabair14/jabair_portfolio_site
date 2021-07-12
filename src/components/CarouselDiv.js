import Carousel from 'react-bootstrap/Carousel'

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselDiv