import React from 'react';
import { SongCard } from "../song-card/song-card";
import { SongView } from "../song-view/song-view";
import { LoginView } from '../login/login-view';
import { RegisterView } from "../register-view/register-view";
import { GenreView } from "../genre-view/genre-view";
import { ArtistView } from "../artist-view/artist-view";
import { UserProfilView } from "../user-profil-view/user-profil-view";
import axios from 'axios';
import { Col, Row, Container } from "react-bootstrap";
import { bool } from 'prop-types';

import { BrowserRouter as Router, Route } from "react-router-dom";

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
          isRegister: bool
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

   return <Router>
   <div className="main-view">
       

        <Route exact path="/login" render={()=>(
          <LoginView 
            onLoggedIn={user => this.onLoggedIn(user)} 
            onRegister={bool => this.onRegister(bool)}
          />
        )}/>

        <Route exact path="/register" render={()=>(
          <RegisterView 
            onRegister={bool => this.onRegister(bool)}
          />
        )}/>

        <Route exact path="/" render={()=>(
          songs.map( (song) => {
            return <SongCard 
                          key={song._id} 
                          song={song} 
                          onSongClick={(newSelectedSong) => { 
                                  this.setState({selectedSong: newSelectedSong})
                                }}/>})
        )}/>

        <Route path="/songs/:songId" render={()=>(
          <SongView song={selectedSong} />
        )}/>     

        <Route path="/genres/:name" render={({match})=>{
           if (songs.length === 0 ) {return <div className="main-view" />}
           return  <GenreView genre={songs.find(m => m.Genre.Name === match.params.name).Genre}/>
        }}/>

        <Route path="/artist/:name" render={()=>(
          <ArtistView/>
        )}/>

        <Route exact path="/profil" render={()=>(
          <UserProfilView/>
        )}/>

   </div>
</Router>
  //   /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
  //   if (!user) return( <LoginView 
  //     onLoggedIn={user => this.onLoggedIn(user)} 
  //     onRegister={bool => this.onRegister(bool)}
  
  //   />)
    
      
    
    
  

  //   if(!isRegister) { return <RegisterView /> }
  //   if (selectedSong) return <SongView song={selectedSong} />;
  //   if (songs.length === 0){
  //       return (<Container>
  //         <Row>
  //           <div className="main-view">The list is empty!</div>
  //         </Row>
  //       </Container>)
        
  
  //   } else {
  //       return (<Container>
  //         <Row>

  //           <Col md={4}>
  //             {songs.map((song) => {
  //               return <SongCard key={song._id} song={song} onSongClick={(newSelectedSong) => { this.setState({selectedSong: newSelectedSong}) }}/>;
  //             })}
  //           </Col>
         
  //         </Row>
  //       </Container>
            
  //   );
  // }
};

}