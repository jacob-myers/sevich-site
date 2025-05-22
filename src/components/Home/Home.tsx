//import reactLogo from '../../assets/react.svg'

import back from '@assets/self_back.jpg'

import { Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <div >
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Col style={{alignContent: 'center', width: '50%'}}>
                    <blockquote className='blockquote' style={{margin:'0', textAlign:'left'}}>
                        <h1>Karen Myers</h1>
                        <p className='text-normal'>
                            <span className='text-important'>I am a writer. </span> <br/>
                            I am quite sure I proclaimed that as soon as I learned how to hold a pencil!
                            <br/> <br/>
                            In the course of my career and personal life, I have written everything from my own newspaper column in New Hampshire's second largest newspaper, to marketing materials, to fiction, to medical news stories, to a consumer guide on electric deregulation.
                            <br/> <br/>
                            I am also an editor, and I was honored to edit my Dad's autobiography, which he wrote for me, my brother and his grandchildren.
                            <br/> <br/>
                            I worked as a freelance writer for several years when my children were young, before I returned to the workforce. Now, as an empty nester, I have returned to my passion of doing freelance writing and design. After reviewing the samples of my work here, please contact me with any questions or proposals you may have. I look forward to talking with you!
                        </p>
                    </blockquote>
                </Col>
                <Col style={{alignContent: 'center', marginLeft:'20px'}}>
                    <img src={back} className="img-home" alt="self" />
                </Col>
            </Row>
        </div>
    );
}

export default Home;