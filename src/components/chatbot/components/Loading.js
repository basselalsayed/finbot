// import React from 'react'
import React, { Component } from 'react'
import ReactLoading from 'react-loading'

// const Loading = () => (
//   <ReactLoading type='bubbles' color='blue' height={100} width={50} />
// );

export const Loading = () => {


    return (
      <div className="typing">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
  )
  
  
}


export default Loading;