import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeroContainer = () => {
    return (
        <>
            <Container className="herocontainer">
                <Row className="rowcontainer">
                    <Col xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:6, order:2}} lg={{size:6, order:1}} className="herocol"><span className="herotext">Build something meaningFUL with these RESTful APIs</span></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:6, order:1}} lg={{size:6, order:2}} className="herocol">
                        <div className="heroillustration">
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default HeroContainer
