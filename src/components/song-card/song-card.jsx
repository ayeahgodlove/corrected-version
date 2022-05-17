import React from 'react'

export class SongCard extends React.Component {
  render(){
      const {song, onSongClick } = this.props;
    return <div> 
            <img src={song.ImagePath} alt="Cover" />
            <h2>{song.Title}</h2>
            <button onClick={() => { onSongClick(song) }  }>Click Me</button>
             </div> 
  }
}