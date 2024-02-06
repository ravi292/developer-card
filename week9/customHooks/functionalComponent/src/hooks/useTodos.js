import { useEffect, useState } from "react";
import axios from "axios";

export default function useTodos(n = 60) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    function getData() {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos);
                setLoading(false)
                console.log("Todos Set");
            })
    }

    useEffect(() => {
        const id = setInterval(() => {
            getData();
        }, n * 1000)
        getData();
        return () => clearInterval(id);
    }, [n])

    return [todos, loading, setTodos];
}

