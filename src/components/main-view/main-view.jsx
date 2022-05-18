import React from 'react';
import { SongCard } from "../song-card/song-card";
import { SongView } from "../song-view/song-view";
import { LoginView } from '../login/login-view';
import axios from 'axios';

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
          user: null
        }
    }

    componentDidMount(){
      axios.get('https://young-shore-18643.herokuapp.com//songs')
        .then(response => {
          this.setState({
           songs: response.data
          });
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

  render() {

    const {songs, selectedSong, user} = this.state;
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (selectedSong) return <SongView song={selectedSong} />;
    if (songs.length === 0){
        return <div className="main-view">The list is empty!</div>;
    } else {
        return (
            <div className="main-view">
            {songs.map((song) => {
              return <SongCard key={song._id} song={song} onSongClick={(newSelectedSong) => { this.setState({selectedSong: newSelectedSong}) }}/>;
            })}
            </div>
    );
  }};

}