import React, { useState } from 'react';

export const Add = (props) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !des)
            alert("Title or Description can be empty!!");
        else {
            props.addTodo(title, des);
            setTitle("");
            setDes("");
        }
    }
    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Description</label>
                    <input type="text" value={des} onChange={(e) => setDes(e.target.value)} className="form-control" id="des" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default Add
