import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BandList(props) {
  return (
    <div className="bandListView">
      <div className="bandList">
      { props.bands.map(band =>
        <Link to={ band.id }>
          <div className="bandListElement">{band.name} {band.genre}</div>
        </Link>
      )}
      </div>
      <div className="bandDetail">
        Here is data on the band
        <Outlet />
      </div>
    </div>
  )
}

export default BandList;