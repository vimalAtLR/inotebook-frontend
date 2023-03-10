import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContex';

function AddNote(props) {
    let { addNote } = useContext(noteContext);
    const initialState = { title: "", description: "", tag: ""}
    const [note, setNote] = useState(initialState);

    const handleAddNote = (e) => {
        e.preventDefault(); 
        addNote(note.title, note.description, note.tag);
        setNote(initialState);
        props.showAlert("Note Added Successfully.", "success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name] : [e.target.value] });
    }

    return (
        <div className="container my-3">
            <h2>Add new Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={note.title} className="form-control" id="title" name='title' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={note.description} className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag} className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
