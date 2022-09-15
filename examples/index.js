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
    <div className="title container">
      <h2 className="item">默认</h2>
      <h2 className="item">线条圆角</h2>
      <h2 className="item">虚线样式</h2>
      <h2 className="item">更改宽度和颜色</h2>
      <h2 className="item">填充颜色</h2>
      <h2 className="item">扇形</h2>
      <h2 className="item">自定义插槽显示</h2>
    </div>
    <div className="line container">
      <div className="item">
        <Progress type="line" percentage={50} />
      </div>
      <div className="item">
        <Progress type="line" percentage={60} borderRadius={20} />
      </div>
      <div className="item">
        <Progress type="line" percentage={60} isDashed={true} borderRadius={20} />
      </div>
      <div className="item">
        <Progress type="line" strokeColor="red" backStrokeColor="#FFBCAD" percentage={60} borderRadius={20} />
      </div>
      <div className="item"></div>
      <div className="item">
        <Progress
          type="line"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          borderRadius={20}
          slot={lineSlot}
        />
      </div>
    </div>
    <div className="circle container">
      <div className="item">
        <Progress type="circle" percentage={50} />
      </div>
      <div className="item">
        <Progress type="circle" percentage={50} strokeLinecap="round" />
      </div>

      <div className="item">
        <Progress type="circle" percentage={50} isDashed={true} />
      </div>
      <div className="item">
        <Progress
          type="circle"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          textStyle={{ color: '#FF5100' }}
        />
      </div>
      <div className="item">
        <Progress
          type="circle"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={10}
          backStrokeWidth={10}
          fillColor="#409eff"
        />
      </div>
      <div className="item">
        <Progress type="circle" strokeColor="red" backStrokeColor="#FFBCAD" percentage={60} isFan={true} />
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
    </div>
    <div className="ellipse container">
      <div className="item">
        <Progress type="ellipse" percentage={50} />
      </div>
      <div className="item">
        <Progress type="ellipse" percentage={50} strokeLinecap="round" />
      </div>
      <div className="item">
        <Progress type="ellipse" percentage={50} isDashed={true} />
      </div>
      <div className="item">
        <Progress
          type="ellipse"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          textStyle={{ color: '#FF5100' }}
        />
      </div>
      <div className="item">
        <Progress
          type="ellipse"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          fillColor="#409eff"
        />
      </div>
      <div className="item"></div>
      <div className="item">
        <Progress
          type="ellipse"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          slot={slot}
        />
      </div>
    </div>
    <div className="rect container">
      <div className="item">
        <Progress type="rect" percentage={50} />
      </div>
      <div className="item">
        <Progress type="rect" percentage={50} strokeLinecap="round" />
      </div>
      <div className="item">
        <Progress type="rect" percentage={50} isDashed={true} />
      </div>
      <div className="item">
        <Progress
          type="rect"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          strokeLinecap="round"
          strokeLinejoin="round"
          backStrokeWidth={20}
          textStyle={{ color: '#FF5100' }}
        />
      </div>
      <div className="item">
        <Progress
          type="rect"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={20}
          strokeLinecap="round"
          strokeLinejoin="round"
          backStrokeWidth={20}
          fillColor="#409eff"
        />
      </div>
      <div className="item"></div>
      <div className="item">
        <Progress
          type="rect"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          strokeLinecap="round"
          strokeLinejoin="round"
          percentage={60}
          strokeWidth={20}
          backStrokeWidth={20}
          slot={slot}
        />
      </div>
    </div>
    <div className="path container">
      <div className="item">
        <Progress
          type="path"
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          percentage={50}
        />
      </div>
      <div className="item">
        <Progress
          type="path"
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          percentage={50}
          strokeLinecap="round"
        />
      </div>
      <div className="item">
        <Progress
          type="path"
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          percentage={50}
          isDashed={true}
        />
      </div>
      <div className="item">
        <Progress
          type="path"
          pathLength={1000}
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          backStrokeWidth={10}
          textStyle={{ color: '#FF5100' }}
        />
      </div>
      <div className="item">
        <Progress
          type="path"
          pathLength={1000}
          width={200}
          heigth={200}
          d="m98.46526,66.68191c26.79919,-75.60325 131.7993,0 0,97.20418c-131.7993,-97.20418 -26.79919,-172.80743 0,-97.20418z"
          strokeColor="red"
          backStrokeColor="#FFBCAD"
          percentage={60}
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          backStrokeWidth={10}
          fillColor="#409eff"
        />
      </div>
      <div className="item"></div>
      <div className="item">
        <Progress
          type="path"
          pathLength={1000}
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
    </div>
  </div>
);
root.render(<App />);
