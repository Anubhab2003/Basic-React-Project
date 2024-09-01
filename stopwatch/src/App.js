// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if (running){
      interval = setInterval(()=>{
        setTime(prev=>prev+10)
      },10);
    } else if(!running){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);

  },[running]);

  return (
    <>
    <h1 className="flex  justify-center">StopWatch</h1>
    <div className="flex  justify-center py-1">
      <span >{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span >{("0" +Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span >{("0"+((time/10)%100)).slice(-2)}</span>
    </div>
    <div className="flex  justify-center">
      {running?(<button className="p-2 border-gray-500"onClick={()=>{setRunning(false)}}>Stop</button>):(    <button className="p-2" onClick={()=>{setRunning(true)}}>Start</button>
)}
    {/* <button onClick={()=>{setRunning(true)}}>Start</button>
    <button onClick={()=>{setRunning(false)}}>Stop</button> */}
    <button onClick={()=>setTime(0)}>Reset</button>
    </div>

    </>
  );
}

export default App;
