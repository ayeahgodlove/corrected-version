import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export default class GenreView extends React.Component {
  render() {
    const { genre } = this.props.match.params.name;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{genre.Title}</Card.Title>
                <Card.Text>{genre.Description}</Card.Text>
              </Card.Body>
            </Card>
            <Button
              onClick={() => {
                history.back();
              }}
            >
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
