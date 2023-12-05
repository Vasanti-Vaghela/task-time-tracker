import { useState, useContext } from "react";
import { Input, Modal } from "antd"
import TaskContext from "../context/TaskContext";



export const  TaskModal = ({setTime,timeTracked,isModalOpen, setIsModalOpen}) => {
    const { TextArea } = Input;
    const { addTask } = useContext(TaskContext);
    const [input, setInput] = useState();
    const [description, setDescription] = useState();

    const handleOk = () => {
        setIsModalOpen(false);
        setTime((prevState)=>prevState);
        addTask({
          title:input,
          time:timeTracked
        })
  
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return (
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="Task Title" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <br/>
            <TextArea rows={4} placeholder="Title Descriptiion" maxLength={6} value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Modal>
    )
}
