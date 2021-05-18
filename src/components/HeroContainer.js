import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const HeroContainer = () => {
    return (
        <>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 heydev">Hey Developers</h1>
                    <p className="lead">Build something meaningFUL with these RESTful APIs.</p>
                    <hr className="my-2" />
                    <p className="lead">Easily add your own API and share with with the world.</p>
                    <p className="lead">
                    <Button className="herobutton">Learn More</Button>
                    </p>
                </Container>
            </Jumbotron>
        </>
    )
}

export default HeroContainer
