import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added");
            history.push('/'); 
        })
    }
    return (
        <div className="create">
            <h2>Add a blog</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="Blog Title"
                 required
                 value={title}
                 onChange={(e) => {setTitle(e.target.value)}}
                />
                <input
                 placeholder="Blog Body"
                 required
                 value={body}
                 onChange={(e) => {setBody(e.target.value)}}
                />
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                >
                    <option value="Mario">Mario</option>
                    <option value="Shreyash">Shreyash</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;