import React from 'react'
import ReactDOM from 'react-dom/client'
import Exercise1 from './intro/Exercise1.jsx'
import Exercise2 from './intro/Exercise2.jsx'
import './intro/App.css' 
import App from './app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1 style={{ padding: "20px", color: "#333" }}>My React Exercises</h1>
      <Exercise1 />
      <Exercise2 />
      <App/>
    </div>
  </React.StrictMode>,
)