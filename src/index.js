import React from 'react';
import ReactDOM from 'react-dom/client';
import Timeline from './components/Timeline';
import './styles/timeline.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <div className='header'>
          <h1 className="title">Timeline Visualization</h1>
          <p className="description">A simple timeline visualization app</p>
        </div>
      </div>
      <div className='timeline-container'>
        <Timeline />
      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);