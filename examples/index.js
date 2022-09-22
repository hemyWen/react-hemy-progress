import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import Progress from '../src';
import './index.css';
const slot = (
  <div style={{ textAlign: 'center' }}>
    {/* <i className="fa fa-user-circle fa-lg"></i> */}
    <img src="./assets/react.png" style={{ width: '30%', height: '30%' }} />
  </div>
);
const lineSlot = (
  <div style={{ textAlign: 'center' }}>
    {/* <i className="fa fa-user-circle fa-lg"></i> */}
    <img src="./assets/react.png" style={{ width: '20px', height: '20px' }} />
  </div>
);
const App = () => (
  <div className="App">
    <div className="line container">
      <div className="item">
        <Progress type="line" borderRadius={20} strokeColor="red" backStrokeColor="#FFBCAD" percentage={60} />
      </div>
      <div className="item">
        <Progress
          type="circle"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          slot={slot}
        />
      </div>
      <div className="item">
        <Progress
          type="circle"
          isDashed={true}
          dashedLength={3}
          dashedDistance={3}
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          slot={slot}
        />
      </div>
      <div className="item">
        <Progress
          type="rect"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          strokeLinejoin="round"
          strokeLinecap="round"
          slot={slot}
        />
      </div>
      <div className="item">
        <Progress
          type="path"
          pathLength={1000}
          fillColor="#D7BDE2"
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          strokeLinecap="round"
          strokeLinejoin="round"
          percentage={60}
          strokeWidth={10}
          backStrokeWidth={10}
          slot={slot}
        />
      </div>
      <div className="item">
        <Progress type="line" percentage={50} isDashed={true} />
      </div>
    </div>
  </div>
);
root.render(<App />);
