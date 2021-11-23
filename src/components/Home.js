import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Hello React Router</h1>
      <p>Welcome to react router demo! Click on the button below to change view with react router.
      </p>
      <Link to="bandnew"><button>Add new band</button></Link>
    </div>
  )
}