import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <div className="m-5 p-5">
                <h1 className='text-info fw-bold'>Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0" flush className="mt-3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Are there any age restrictions for this tour?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can I wash my clothes during the tour?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Will I have access to the internet?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do I need any vaccinations?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Are there any age restrictions for this tour?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Why choose us?</Accordion.Header>
                        <Accordion.Body>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;