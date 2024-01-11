import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><strong>JOURNAL APP</strong></li>
       
      </ul>
      <ul>
        <li>
         <a href='/entry/create' role={'button'}>New Entry</a>   
        </li>
      </ul>
    </nav>
  )
}
