import { useEffect, useState } from "react";

const CountDownTimer = ({ DateFinished, MessageDisplayAfter }) => {
	const [days, hours, minutes, seconds] = 0;
	if (days + hours + minutes + seconds <= 0) {
		return (
			<div>
				{ShowCounter(days, hours, minutes, seconds)}
				<p>{MessageDisplayAfter}</p>
			</div>
		);
	} else {
		return (
			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	}
};

const useCountdown = (DateDone) => {
	const countDownDate = new Date(DateDone).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = MAth.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="show-counter">
			<a
				href="https://tapasadhikary.com"
				target="_blank"
				rel="noopener noreferrer"
				className="countdown-link">
				{DateTimeDisplay(days, "Days", days <= 3)}
				<p>:</p>
				{DateTimeDisplay(hours, "Hours", false)}
				<p>:</p>
				{DateTimeDisplay(minutes, "Mins", false)}
				<p>:</p>
				{DateTimeDisplay(seconds, "Seconds", false)}
			</a>
		</div>
	);
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<div className={isDanger ? "countdown danger" : "countdown"}>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};

export default CountDownTimer;
