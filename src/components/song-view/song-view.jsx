import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export class SongView extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card id="movie-view">
              <Card.Body>
                <Card.Img variant="top" src={song.ImagePath} />
                <Card.Title>{song.Title}</Card.Title>
                <Card.Text>{song.Description}</Card.Text>
                {/* <Card.Text>Director: {song.Director.Name}</Card.Text>
                <Card.Text>Genre: {song.Genre.Name}</Card.Text> */}
              </Card.Body>
            </Card>
            <Button
              onClick={() => {
                console.log("pushed");
              }}
            >
              Back
            </Button>
            <Button onClick={() => {}}>Add to favorites</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
