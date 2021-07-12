import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Alert
} from 'react-bootstrap'
import { useFetch } from '../../Hooks/useFetch';
export const ListComponent = () => {
    const { loading, data } = useFetch('https://pokeapi.co/api/v2/pokemon/');
    if (loading) {
        console.log(data)
    }
    return (
        <Container>
            <Row>
                {
                    loading
                    ?
                    (
                        <Col>
                            <Alert variant='primary'>
                                Cargando
                            </Alert>
                        </Col>
                    )
                    :
                    (
                        <>
                        {
                            data.map( (poke, indi) => {
                                return (
                                    <Col xs={12} lg={3} key={indi} className="mb-3">
                                        <Card>
                                            <Card.Body><Card.Title>{poke.name}</Card.Title></Card.Body>
                                        </Card>
                                    </Col>
                                    )
                                })
                            }
                        </>
                            
                    )
                }
                    
            </Row>
        </Container>
    )
}

