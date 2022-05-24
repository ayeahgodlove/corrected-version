import React from 'react';
import { SongCard } from "../song-card/song-card";
import { SongView } from "../song-view/song-view";
import { LoginView } from '../login/login-view';
import { RegisterView } from "../register-view/register-view";
import axios from 'axios';
import { Col, Row, Container } from "react-bootstrap";
import { bool } from 'prop-types';

export class MainView extends React.Component {


    constructor(){
        super();
        this.state = {
          songs: [
            { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...'},
            { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...'},
            { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
          ],
          selectedSong: null,
          user: null,
          isRegister: false
        }
    }

    componentDidMount(){
      

      axios.get('https://young-shore-18643.herokuapp.com/songs')
        .then(response => {
          if (response.data.length === 0) {
            return
          }
          this.setState({
           songs: response.data
          });
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
      });
    }

    onLoggedIn(user) {
      this.setState({
        user
      });
    }

    onRegister(isRegister) {
      this.setState({
        isRegister
      });

    }

  render() {

    const {songs, selectedSong, user, isRegister} = this.state;
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView 
                          onLoggedIn={user => this.onLoggedIn(user)} 
                          onRegister={bool => this.onRegister(bool)}
                      />;
    if(isRegister) { return <RegisterView /> }
    if (selectedSong) return <SongView song={selectedSong} />;
    if (songs.length === 0){
        return (<Container>
          <Row>
            <div className="main-view">The list is empty!</div>
          </Row>
        </Container>)
        
  
    } else {
        return (<Container>
          <Row>

            <Col md={4}>
              {songs.map((song) => {
                return <SongCard key={song._id} song={song} onSongClick={(newSelectedSong) => { this.setState({selectedSong: newSelectedSong}) }}/>;
              })}
            </Col>
         
          </Row>
        </Container>
            
    );
  }};

}