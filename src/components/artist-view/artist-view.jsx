import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export class ArtistView extends React.Component {
  render() {
    const { artist } = this.props.match.params.name;

    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{artist.Title}</Card.Title>
                <Card.Text>{artist.Bio}</Card.Text>
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
