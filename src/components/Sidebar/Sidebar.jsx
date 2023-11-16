import React from 'react';
import './Sidebar.scss';
import Accordion from 'react-bootstrap/Accordion';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" defaultChecked/>
                            <label className="form-check-label active" >
                                Gold
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" >
                                Silver
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" >
                                Platinum
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" >
                                Palladium
                            </label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="box"></div>

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Weight</Accordion.Header>
                    <Accordion.Body>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                            <label className="form-check-label" >
                                2 gm
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                            <label className="form-check-label" >
                                5 gm
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                            <label className="form-check-label" >
                                8 gm
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                            <label className="form-check-label" >
                                10gm and above
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                            <label className="form-check-label" >
                                20 gm
                            </label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Sidebar
