import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo , removeToDo } from '../redux/TodoSlice';

const ToDo = () => {
    const [mytask, setTask] = useState();
    const [myid,setMyid] = useState(0);
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.TodoSlice)
    // console.log(selector.allTodo)
    // const dlen = selector.allTodo.length;

    const addingTodo = ()=>{
        setMyid(myid+1);
        dispatch(addTodo(
            {
                id:myid,
                task: mytask
            }
        ))
        setTask("");
        
    }
    // console.log(dlen)
    return (
        <div>
            <div className='container p-4 bg-secondary text-light rounded mt-5 shadow-lg'>
                <h2 className='bg-dark rounded p-3'>Todo List</h2>
                <div className='container p-2 mt-3'>
                    <div className="row">
                        <div className="col-sm-9">
                            <input type="text" className='form-control p-2 ' placeholder='Add Your Tasks' value={mytask} onChange={(e) => {
                                setTask(e.target.value)
                            }} />
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-outline-light p-2 " onClick={addingTodo
                                
                                
                            }>Add Task</button>
                        </div>
                    </div>

                    {/* todo list map */}

                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col-md-2">No.</th>
                                <th scope="col-md-7">Your Task..</th>
                                <th scope="col-md-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList.map((data, i) => (
                                    <tr key={i}>
                                        <th scope="row"> {i + 1}</th>
                                        <td >
                                            <p>
                                                {data.task}
                                            </p>
                                        </td>
                                        <td><div className=''>
                                            <button type="button" className="btn btn-danger mx-1 m-1" onClick={()=>{
                                                dispatch(removeToDo(data.id))
                                            }}>Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            {/* {dlen} */}
        </div >
    )
}

export default ToDo