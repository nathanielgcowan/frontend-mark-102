import React from 'react'
import { useParams } from 'react-router-dom';

export default function BandDetailView(props) {

  const result = useParams();

  const band = props.bands.find(band => band.id === result.bandId);
  if(band == null) {
    return <div>No matching contact</div>
  }

  return (
    <div>
      <table>
        <tr>
          <td>Chord</td>
          <td>{band.chord}</td>
        </tr>
        <tr>
          <td>Instrument</td>
          <td>{band.instrument}</td>
        </tr>
        <tr>
          <td>Album</td>
          <td>{band.album}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>{band.genre}</td>
        </tr>
        <tr>
          <td>Likes</td>
          <td>{band.likes}</td>
        </tr>
      </table>

    </div>
  )
}