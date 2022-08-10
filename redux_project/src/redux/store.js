import { createStore } from 'redux'
import reducer from "./reducer/reducer";
// store는 무조건 return 값을 받아야함

let store = createStore(reducer);

export default store;