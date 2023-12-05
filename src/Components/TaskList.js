import { useContext } from "react";
import TaskContext from "../context/TaskContext"; 
import { Task } from "./Task";
 
 const TaskList = ({tasks}) => {
    const { task } = useContext(TaskContext);
    return ( 
        <div className="task-list">
            <h1>Task</h1>
            {task.map((item) => (
                <Task item={item} key={item.id} />
            ))}
        </div>
     );
}
 
export default TaskList;