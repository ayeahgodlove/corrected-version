import React from 'react';
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export class UserProfilView extends React.Component {
  render(){
    const {user} = this.props.match.params.user;
    
    return (<Container>
      <Row>
          <Col md={4}>
              <Card>
                  <Card.Body>
                    <Card.Title>{artist.Username}</Card.Title>
                    <Card.Text>Email:</Card.Text>
                    <Card.Text>{artist.Email}</Card.Text>  
                    <Card.Text>Birthday:</Card.Text>
                    <Card.Text>{artist.Birthdayl}</Card.Text> 
                  </Card.Body>
              </Card>
              <Button onClick={() => { history.back(); }}>Back</Button>
          </Col>
         
         <Col md={6}>
            <div>
                <Button onClick={() => { openmodal }}>Edit Profil</Button>
                <Button variant="danger" onClick={() => { openmodal }}>Delete Profil</Button>
            </div>
         </Col>
      </Row>
      <Row>
        Favourit Songs
        <Col md={4}>
        {artist.songs.map((song) => {
            return <SongCard key={song._id} song={song} onSongClick={(newSelectedSong) => { this.setState({selectedSong: newSelectedSong}) }}/>;
        })}
        </Col>
      </Row>
      <Row>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Edit <Profil></Profil></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} 
                                        required 
                                        placeholder={artist.Username} 
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} 
                                        required
                                        placeholder={artist.password}
                                        minLength="8" 
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                        required
                                        placeholder={artist.Email} 
                                    />
                                </Form.Group>
                            </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
      </Row>
  </Container>)
  }
}