import React from 'react'

export class SongView extends React.Component {
  render(){
    const {song} = this.props;
    
    return <div className="song-view">
    <div className="song-poster">
      <img src={song.ImagePath} />
    </div>
    <div className="song-title">
      <span className="label">Title: </span>
      <span className="value">{song.Title}</span>
    </div>
    <div className="song-description">
      <span className="label">Description: </span>
      <span className="value">{song.Description}</span>
    </div>

   </div>
  }
}