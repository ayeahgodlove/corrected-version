import React from 'react';
import { SongCard } from "../song-card/song-card";
import { SongView } from "../song-view/song-view";

export class MainView extends React.Component {


    constructor(){
        super();
        this.state = {
          songs: [
            { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...'},
            { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...'},
            { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
          ],
          selectedSong: null
        }
      }

  render() {

    const {songs, selectedSong} = this.state;
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