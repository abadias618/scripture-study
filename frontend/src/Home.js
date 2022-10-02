import { Button, Col, Container, Row } from 'react-bootstrap';

const columnStyle = {textAlign: 'center'}

const Home = () => {
    return(
        <Container className='align-items-center'>
            <Row style={columnStyle}>
                <h1>Study Archive</h1>
            </Row>
            <Row>
                <Col style={columnStyle}>
                    <Button>Journal Entry</Button>
                </Col>
                <Col style={columnStyle}>
                    <Button>Study Entry</Button>
                </Col>
            </Row>
            
        </Container>
        
    )
}

export default Home;