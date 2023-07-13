//import React from 'react'
import './resume.css'

type Props ={
    title: string,
    value: number
}

const Resume = ({title, value}:Props) => {
  return (
    <div className='resume'>
        <div className="title">{title}</div>
        <div className="info" >R$ {value}</div>
    </div>
  )
}

export default Resume