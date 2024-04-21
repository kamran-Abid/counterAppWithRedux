import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
