import React, { useRef, useState } from "react";

const Stopwatch = () => {
	const [count, setCount] = useState(0);
	const timerId = useRef(null);

	const startCount = () => {
		if (!timerId.current) {
			let id = setInterval(() => {
				setCount((prev) => prev + 1);
			}, 1000);
            timerId.current=id;
		}
	};
	const stopCount = () => {
        clearInterval(timerId.current);
        timerId.current=null;   
    };
	const resetCount = () => {
        clearInterval(timerId.current);
        setCount(0);
        timerId.current=null; 
    };
	return (
		<div>
			<h1>Stopwatch:</h1>
			<h1>{count}</h1>

			<button onClick={startCount}>Start</button>
			<button onClick={stopCount}>Stop</button>
			<button onClick={resetCount}>Reset</button>
		</div>
	);
};

export default Stopwatch;
