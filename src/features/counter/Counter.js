import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice';

const Counter = () => {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	const [incrementValue, setIncrementValue] = useState(0);
	
	return  (
		<div>
			<div>
				<span>{count}</span>
				<div>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>Increment</button>
					<button
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>Decrement</button>
				</div>
				<div>
					<input type="number" value={incrementValue} onChange={(e) => setIncrementValue(+e.target.value)} />
					<button onClick={() => dispatch(incrementByAmount(incrementValue))}>Set Amount</button>
					<button onClick={() => dispatch(incrementAsync(incrementValue))}>Set Async Amount</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;