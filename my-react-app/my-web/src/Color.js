import React from 'react'
import { useState } from 'react';
export default function Color () {
    const [color,setColor] = useState('red');
  return (
    <>
    <h1>{color}</h1>
    <button type='button'
    className='btn btn-success'
    onClick={()=> setColor('blue')}
    >Blue</button>
    </>
  )
}
