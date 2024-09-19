import React from 'react'
import './404.css'

const Error = () => {
  return (
    <div className="not-found-container">
      <div className="gif-container">
        <img src="https://assets.dochipo.com/editor/animations/404-error/6d3fd8ed-a4e6-47e8-8a15-1d43d02cf83b.gif" alt="404 Error" className="error-gif" />
      </div>
      <h2 className="error-message">Page Not Found</h2>
      <p className="error-description">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="home-link">
        Go back to homepage
      </a>
      </div>
  )
}

export default Error
