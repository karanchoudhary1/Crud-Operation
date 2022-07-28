import React from 'react'

const Welcome = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{ width: "100vw", height: "100vh" }}>
      <div className="card">
        <div className="card-header">
          Welcome Here
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>This Projecct Based On Crud Operation</p>
            <footer className="blockquote-footer">Build by React Js,MongoDB,Node JS</footer>
          </blockquote>
        </div>
      </div>

    </div>
  )
}

export default Welcome