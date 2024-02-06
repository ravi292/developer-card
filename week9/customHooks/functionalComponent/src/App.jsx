import './App.css'
import React, { useEffect, useState } from 'react';
import useTodos from './hooks/useTodos';
import useIsOnline from './hooks/useIsOnline';
import useMousePointer from './hooks/useMousePointer';
import useInterval from './hooks/useInterval';
import useDebounce from './hooks/useDebounce';

function App() {
    const [input, setInput] = useState();

    const delayInput = useDebounce(input, 300);

    return(
        <div>
            <h1>Input your value, and see the debounce work</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <h2>{delayInput}</h2>
        </div>
    )

}

//function App() {
//    const [count, setCount] = useState(0);
//    useInterval(() => setCount(c => c+1), 1);
//    return (
//        <div>Count: {count}</div>
//    )
//}

//function App() {
//    const position = useMousePointer();
//
//    return (
//        <div>
//            <h2>{position.x}, {position.y}</h2>
//        </div>
//    )
//}

//function App() {
//    const [todos, loading] = useTodos(5);
//
//    return (
//        <>
//            {loading ? <div>Loading...</div> : (
//                <div>
//                    {todos.map((todo, index) => <Track key={index} todo={todo} />)}
//                </div>
//            )}
//        </>
//    )
//}
//
//function Track({ todo }) {
//    return <div>
//        {todo.title}
//        <br />
//        {todo.description}
//    </div>
//}

//function App() {
//    const [shouldRender, setShouldRender] = useState(true);
//    useEffect(() => {
//        setTimeout(() => {
//            setShouldRender(false)
//        }, 10000)
//    })
//    return(
//        <div>
//            {shouldRender && <MyComponent />}
//        </div>
//    )
//}
//
//class MyComponent extends React.Component {
//  componentDidMount() {
//    // Perform setup or data fetching here
//    console.log("Component Mounted")
//  }
//
//  componentWillUnmount() {
//    // Clean up (e.g., remove event listeners or cancel subscriptions)
//    console.log("Component UnMounted")
//  }
//
//  render() {
//    // Render UI
//      return (
//          <div>From Inside My Component</div>
//      )
//      
//  }
//}
//
//function MyComponent() {
//  useEffect(() => {
//      console.log("Component Mounted")
//
//    return () => {
//        {console.log("Component UnMounted")}
//    };
//  }, []);
//
//    return(
//        <div>
//            From Inside my Component
//        </div>
//    )
//
//}


//class MyComponent extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = { count: 0 };
//  }
//
//  incrementCount = () => {
//    this.setState({ count: this.state.count + 1 });
//  }
//
//  render() {
//    return (
//      <div>
//        <p>{this.state.count}</p>
//        <button onClick={this.incrementCount}>Increment</button>
//      </div>
//    );
//  }
//}

//function MyComponent() {
//  const [count, setCount] = useState(0);
//
//  const incrementCount = () => {
//    setCount(count + 1);
//  };
//
//  return (
//    <div>
//      <p>{count}</p>
//      <button onClick={incrementCount}>Increment</button>
//    </div>
//  );
//}

export default App
