import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './Tabs.scss'

const Tabs = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={12}>
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Product Details</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className='description'>
                                <Row>
                                    <Col lg={1} className='d-none d-lg-block'></Col>
                                    <Col xs={12} lg={10}>
                                        <p>Lord Ganesha bestows blessings of prosperity upon his devotees, as vighnaharta, is relied upon for his power to remove obstacles from the paths of
                                            humankind. This Lord Ganesha 2 gram 24k, 999.9 purest gold coin is exquisitely minted at MMTC-PAMP’s LBMA accredited refinery and captures your
                                            favourite deity’s divinity in all its glory. It is available in denominations of 2gm, 5gm and 10gm.</p>

                                        <p>MMTC-PAMP gives you the guarantee that every piece of Gold that you buy from us will weigh more than what is mentioned on the pack. Always.</p>
                                    </Col>
                                    <Col lg={1} className='d-none d-lg-block'></Col>
                                </Row>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className='details'>
                                <Row>
                                    <Col lg={1} className='d-none d-lg-block'></Col>
                                    <Col xs={12} lg={10}>
                                        <Row>
                                            <Col xs={6} lg={3}>
                                                <ul>
                                                    <li>SKU</li>
                                                    <li>Net Weight (gm)</li>
                                                    <li>Categories</li>
                                                    <li>Purity</li>
                                                    <li>Shape</li>
                                                </ul>
                                            </Col>

                                            <Col xs={6} lg={3}>
                                                <ul className='list-unstyled'>
                                                    <li className='text-break'>AUYyCOG10.01058</li>
                                                    <li>10.00</li>
                                                    <li>Gold</li>
                                                    <li>24K</li>
                                                    <li>Round</li>
                                                </ul>
                                            </Col>

                                            <Col xs={6} lg={3}>
                                                <ul className='custom-margin'>
                                                    <li>Dimension</li>
                                                    <li>Denomination (gm)</li>
                                                    <li>Weight</li>
                                                    <li>Metal</li>
                                                </ul>
                                            </Col>
                                            
                                            <Col xs={6} lg={3}>
                                                <ul className='list-unstyled custom-margin'>
                                                    <li>25.48 mm/1.5 mm</li>
                                                    <li>10</li>
                                                    <li>10 gm & above</li>
                                                    <li>Gold</li>
                                                </ul>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col lg={1} className='d-none d-lg-block'></Col>
                                </Row>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Tabs
