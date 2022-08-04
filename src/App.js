//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Counter from "./features/counter/Counter";
// import Counter from "./components/Counter";
// import CounterUseReducer from "./components/CounterUseReducer";
import TodoUseReducer from "./components/TodoUseReducer";
// import Display from "./features/counter/Display";

function App() {
  return (
    <div className="App">
      <TodoUseReducer />
      {/* <Counter /> */}
      {/* <CounterUseReducer /> */}
      {/* <Counter /> */}
      {/* <Display /> */}
    </div>
  );
}

export default App;

// Assignment- add another function decrement by amount
// Add css to your app
