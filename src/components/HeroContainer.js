import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const HeroContainer = () => {
    return (
        <>
            <Jumbotron fluid>
                <Container fluid className="">
                    <h1 className="display-3 heydev europa">Use me well, keep me clean, and I’ll never tell what I have seen...What am I?</h1>
                    <hr className="my-2" />
                    <p className="lead europa">RiddleMeThis is a free well formatted REST API that serves interesting, and yes funny riddles.</p>
                    <p className="lead europa"></p>
                    <p className="lead">
                    <Button className="herobutton">Use this API</Button>
                    </p>
                </Container>
            </Jumbotron>
        </>
    )
}

export default HeroContainer
