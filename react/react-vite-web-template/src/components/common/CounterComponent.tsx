import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice.ts';

export default function CounterComponent() {
  // Read state from the store
  // const count = useSelector((state) => state.counter.value);

  // Read state from the store
  // provide a concrete state type to avoid 'unknown' errors
  const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
  const fullState = useSelector((state) => state);

  // const state = useSelector((state) => state);

  useEffect(() => {
    console.log("Entire Redux State:", fullState);
  }, [fullState]);  
  
  // Get the dispatch function
  const dispatch = useDispatch();

  return (
    <div>

      <h2>Count: {count}</h2>

      <h2>fullState: {JSON.stringify(fullState)}</h2>
      
      {/* Trigger state changes on click */}
      <button type="button" className="counter cursor-pointer" onClick={() => dispatch(increment())}>
        + Plus 1
      </button>
      
      <button type="button" className="counter cursor-pointer" onClick={() => dispatch(decrement())}>
        - Minus 1
      </button>
      
      <button type="button" className="counter cursor-pointer" onClick={() => dispatch(incrementByAmount(5))}>
        + Plus 5
      </button>
    </div>
  );
}