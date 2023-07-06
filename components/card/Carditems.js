import React from 'react'
import {Link} from 'react-router-dom'

export default function Carditems(props) {
  return (
    <>
      <li className='cards-item'>
        <Link className ='cards-item-link' to={props.path}>
            <figure className='cards-item-pic' data-category = {props.label}>
                <img src={props.src} alt='Travel img' className='cards-item-img'></img>
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}
