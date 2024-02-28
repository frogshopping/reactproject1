import { useState } from "react";

export const Todo_Comp=()=>{

  const [todo_list,settodo_list]=useState([])
  const [new_task,setnew_task]=useState('')

  const inp_tsk_fnc=(event)=>{
    setnew_task(event.target.value)
  }

  const add_task_func=()=>{
    const task={
      id:todo_list.length===0? 1: todo_list[todo_list.length-1].id +1,
      taskname: new_task
    }
    settodo_list([...todo_list, task])
  }

  const delete_task_func=(id)=>{
    settodo_list(todo_list.filter((pointer)=> pointer.id!==id))
  }


  return (
    <div>
      <div className="tasks">
        <input onChange={inp_tsk_fnc}></input>
        <button onClick={add_task_func}>Add Task</button>
      </div>

      <div className="list">
        {todo_list.map((task) => {
          return (
            <div>
              <h1>{task.taskname}</h1>
              <button onClick={()=> delete_task_func(task.id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}


