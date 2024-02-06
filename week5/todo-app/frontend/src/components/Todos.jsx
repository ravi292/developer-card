export default function Todos({todos, handleUpdate}) {
    return (
        <div>
        {todos.map((todo) => 
            (
                <div key={todo._id} >
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleUpdate(todo._id)}>{todo.completed? 'Completed':'Mark as Completed'}</button>
                </div>
            )
        )}
        </div>
    )

}
