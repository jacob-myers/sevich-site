//import reactLogo from '../../assets/react.svg'

import back from '@assets/self_back.jpg'

import { Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <div >
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Col style={{alignContent: 'center', width: '50%'}}>
                    <blockquote>
                        <h1>Who I am</h1>
                    </blockquote>
                </Col>
                <Col>
                    <img src={back} className="img-home" alt="Vite logo" />
                </Col>
            </Row>
        </div>
    );
}

export default Home;