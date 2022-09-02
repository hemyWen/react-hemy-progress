import Progress from './components/index'
function App() {
  return (
    <div className="App">
      <div className="item">
        <Progress type="line" percentage={50} />
      </div>
      <div className="item">
        <Progress type="circle" percentage={50} />
      </div>
      <div className="item">
        <Progress type="rect" percentage={50} />
      </div>
      <div className="item">
        <Progress type="ellipse" percentage={50} />
      </div>
      <div className="item">
        <Progress
          type="path"
          strokeWidth={10}
          pathLength={1000}
          width={300}
          height={400}
          fillColor="red"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeColor="black"
          d="m151.58526,148.1539c44.11559,-129.94309 216.96193,0 0,167.06968c-216.96193,-167.06968 -44.11559,-297.01277 0,-167.06968z"
          percentage={50}
        />
      </div>
    </div>
  )
}
export default App
