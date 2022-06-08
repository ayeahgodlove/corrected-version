import React from "react";
import { CardGroup, Container, Button, Card } from "react-bootstrap";

export class SongCard extends React.Component {
  render() {
    const { song, onSongClick } = this.props;
    return (
      <Container>
        <CardGroup>
          <Card id="movie-card">
            <a>
              {/* <Card.Img variant="top" src={song.ImagePath} /> */}
            </a>
            <Card.Body>
              <Card.Title id="card-title">{song.Title}</Card.Title>
              <Link to={`/songs/${song._id}`}>
                <Button variant="link">Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
