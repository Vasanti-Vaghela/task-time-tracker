import { useState, useEffect} from "react";
import { TaskModal } from "./TaskModal";

 export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [click, setClick] = useState(false);
    const [timeTracked, setTimeTracked] = useState(0); 
    const [running, setRunning] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const startHandler = () => {
        setRunning(true)
        setClick((prev) => !prev);
    }
    
    const pauseHandler = () => {
        let z = `${h}:${m}:${s}`
            setTimeTracked(z)
            setRunning(false)
            setClick((prev) => !prev);
    }

    const saveTaskHandler = () => {
        setTime(0);
        setIsModalOpen(true);
      }
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval)
    }, [running]);
  let h = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let m = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let s = ("0" + ((time / 10) % 100)).slice(-2);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{h}:</span>
          <span>{m}:</span>
          <span>{s}</span>
        </div>
        <div className="buttons">
          <button  disabled={click} onClick={startHandler}>Start</button>
          <button disabled={!click} onClick={pauseHandler}>Pause</button>
          <button onClick={saveTaskHandler}>Save</button>       
        </div>
        <TaskModal setTime={setTime} timeTracked={timeTracked} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>
    );
  };
       