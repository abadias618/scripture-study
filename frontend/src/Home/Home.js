import './Home.css'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <Row className='text-center'>
                <h1 className='p-5'>Study Archive</h1>
            </Row>
            <Row>
                <Col className='text-center'>
                    <Button onClick={() => navigate('/journal-entry')}>Journal Entry</Button>
                </Col>
                <Col className='text-center'>
                    <Button onClick={() => navigate('scripture-entry')}>Scripture Entry</Button>
                </Col>
            </Row>
            
        </Container>
        
    )
}

export default Home;