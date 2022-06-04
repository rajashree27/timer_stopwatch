import React, { useEffect, useState } from "react";

const Timer = (props) => {
	const [time, setTime] = useState(0);
	const [endTime, setEndTime] = useState("");
	const [stop, setStop] = useState(true);
	

	useEffect(() => {
		let id = null;
		if (!stop) {
			if (time < endTime) {
				id = setInterval(() => {
					setTime((time) => time + 1);
				}, 1000);
			}
		} else {
			clearInterval(id);
		}

		return () => {
			clearInterval(id);
		};
	});

	return (
		<div className="container">
			<input
				type="number"
				placeholder="Enter in seconds..."
				onChange={(e) => {
					setEndTime(e.target.value);
				}}
			/>
			<h1>{time}</h1>

			{/* Start button */}
			<button
				disabled={!endTime}
				className="btn btn-success m-3 px-5"
				onClick={() => {
					setStop(false);
				}}
			>
				Start
			</button>

			{/* Pause button */}
			<button
				disabled={!endTime}
				className="btn btn-warning m-3 px-5"
				onClick={() => {
					setStop(true);
				}}
			>
				Stop
			</button>

			{/* Reset button */}
			<button
				disabled={!endTime}
				className="btn btn-danger m-3 px-5"
				onClick={() => {
					setTime(0);
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default Timer;
