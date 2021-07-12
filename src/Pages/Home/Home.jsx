import React from 'react'
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'

export const HomeComponent = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Home</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

