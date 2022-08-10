import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Box from "./component/Box";


function App() {
    // const [count, setCount] = useState(0);
    let count = useSelector((state) => state.count)       // useSelector는 함수를 매개변수로 받음!
    let id = useSelector((state) => state.id)
    let password = useSelector((state) => state.password)

    const dispatch = useDispatch()

    const increase = () => {
        // setCount(count + 1);
        dispatch({type:"INCREMENT", payload:{num:5} });    // payLoad는 옵션
    };
    const login = () => {
        dispatch({type:"LOGIN", payload:{id:"hyojin", password:"123"}});
    };
    const decrease = () => {
        dispatch({type:"DECREASE", payload:{num:5}});
    }
  return (
    <div>
        <h1>{id}, {password}</h1>
        <h1>{count}</h1>
        <button onClick={increase}>증가!</button>
        <button onClick={decrease}>감소!</button>
        <button onClick={login}>login</button>
        <Box></Box>
    </div>
  );
}

export default App;
