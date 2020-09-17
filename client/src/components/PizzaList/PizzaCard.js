import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './PizzaCard.css';

class PizzaCard extends Component {
    state = {}

    handleAddPizza = () => {
        this.props.history.push('/addPizza/3/5');
    }

    render() {
        return (
            <div className="pb-2">
                <Card className="PizzaCard" style={{ width: "99%", margin: "auto" }}>
                    {/* <Card.Img variant="top" src={this.props.picture} /> */}
                    <Card.Body>
                        <div className="row">
                            <div className="col-4">
                                <Card.Img className="img-thumbnail" variant="top" src={this.props.picture} />
                            </div>
                            <div className="col-8 pl-0">
                                <Card.Title>{this.props.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-around">
                            <div className="w-100">
                                <Form className="my-select">
                                    <Form.Control as="select" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Form>
                            </div>
                            <div className="w-100">
                                <Button variant="warning" onClick={this.handleAddPizza}>Add to cart</Button>
                            </div>
                        </div>
                    </Card.Footer>
                    {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>
            </div>
        );
    }
}

export default withRouter(PizzaCard);