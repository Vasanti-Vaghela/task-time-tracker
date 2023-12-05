import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [task, setTask] = useState([
        {
            id:1,
            title:"Home Work 1",
            time:'12:00'
        },
        {
            id:2,
            title:"Home Work 2",
            time:'1:00'
        }
    ]);

    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addTask = (newTask) => {
        newTask.id = uuidv4()
        setTask([newTask, ...task])
      }

    // Update feedback item
    const updateTask = (id, updItem) => {
       setTask(
        task.map((item) => (item.id === id ? {...item, ...updItem } : item))
       )
    }

    // // Delete feedback
    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are you sure you want to delete?')){
    //       setFeedback(feedback.filter((item)=> item.id !== id))
    //     }
    // }

    // Set item to be updated
    const editTask = (item) => {
        setTaskEdit({
            item,
            edit: true
        })
    }        


    return <TaskContext.Provider value={{
        task,
        addTask,
        editTask,
        taskEdit,
        updateTask,
    }}>
        {children}
    </TaskContext.Provider>
}

export default TaskContext