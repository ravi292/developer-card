import { useState } from "react"

export default function CreateTodo({handleAddition}) {
    const [title, setTitle] = useState('dummy title');
    const [description, setDescription] = useState('dummy description')
    return (
        <div>
            <input 
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text" name="title" placeholder="title..." /> <br />
            <input
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text" name="description" placeholder="description" /> <br />

            <button style={{
                padding: 10,
                    margin: 10
            }}
                onClick={() => handleAddition(title, description)}
            >Add Todo</button>
        </div>
    )
}

