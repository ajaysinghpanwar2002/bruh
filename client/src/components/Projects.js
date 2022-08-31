import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import travelApp from "../images/travelApp.png"
import ai from "../images/ai.jpg"
function Projects() {
    return (
        <>
            <h1 className='d-flex align-items-center justify-content-center text-center-dark my-4'>Projects</h1>
            <div className='container'>
                <div className='row'>
                    
                    <Card style={{width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src={travelApp} />
                        <Card.Body>
                            <Card.Title>Travel app</Card.Title>
                            <Card.Text>
                                I have created Reusable components in React for passing card components, and basic UI
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Css</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/React-Travelapp">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src={ai} />
                        <Card.Body>
                            <Card.Title>Face recognition</Card.Title>
                            <Card.Text>
                                I have created this application using javascript and face-api.js 
                                For more info about the project go to README.MD in the project ( with video demonstration)
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>face-api.js</ListGroup.Item>
                            <ListGroup.Item>AI models</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/Face-Age-Gender-Mood-recognition-using-AI">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.EDNfSmj9Ikc_ntu_b71nxAHaFj?pid=ImgDet&rs=1" />
                        <Card.Body>
                            <Card.Title>I-notebook</Card.Title>
                            <Card.Text>
                            This is notebook on the cloud it includes CRUD functionality (for your notes)
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Express</ListGroup.Item>
                            <ListGroup.Item>Node</ListGroup.Item>
                            <ListGroup.Item>MongoDB</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/inotebook">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.rc53writc8QyVrBE8vJrYgHaHB?pid=ImgDet&rs=1" />
                        <Card.Body>
                            <Card.Title>Text Edit</Card.Title>
                            <Card.Text>
                                Javascript application for manging paragraphs and texts 
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>React-bootstrap</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/TextEdit">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/422904897265078272/6SPC7o9I_400x400.png" />
                        <Card.Body>
                            <Card.Title>Real time chat application</Card.Title>
                            <Card.Text>
                                I have created this Real time chat application (like Whatsapp), user can send message and group chat is also available.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>Node.js</ListGroup.Item>
                            <ListGroup.Item>Socket.io</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/Realtime-chat-application">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/e-book-templates/eBook_template_net_new_7_519x350.jpg.img.jpg" />
                        <Card.Body>
                            <Card.Title>Dance website</Card.Title>
                            <Card.Text>
                                I have created this website for dance academy to have an online presence.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>Node.js</ListGroup.Item>
                            <ListGroup.Item>Express</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/Dancewebsite/tree/master">Code Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:"22.5%", margin: "15px" }} className="box" >
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/31/2e/f5/312ef57605a80d5cea497c7971d942cf.jpg" />
                        <Card.Body>
                            <Card.Title>Our Online Meal</Card.Title>
                            <Card.Text>
                                I have created application for and online store it is just the frontend of the website .
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            
                            <ListGroup.Item>Html</ListGroup.Item>
                            <ListGroup.Item>Css</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/ajaysinghpanwar2002/Ouronlinemeal_website">Code Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Projects;
