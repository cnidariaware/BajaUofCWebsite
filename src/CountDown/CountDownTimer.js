import { useEffect, useState } from "react";

const CountDownTimer = ({ dateFinished, messageDisplayAfter }) => {
	const [days, hours, minutes, seconds] = useCountdown(dateFinished);
	if (days + hours + minutes + seconds <= 0) {
		return (
			<div>
				{ShowCounter(days, hours, minutes, seconds)}
				<p>{messageDisplayAfter}</p>
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
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	let danger = days <= 3;
	return (
		<div>
			<DateTimeDisplay
				valueAwayFrom={days}
				discriptor={"Days"}
				isInDanger={danger}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={hours}
				discriptor={"Hours"}
				isInDanger={false}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={minutes}
				discriptor={"Mins"}
				isInDanger={false}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={seconds}
				discriptor={"Seconds"}
				isInDanger={false}
			/>
		</div>
	);
};

const DateTimeDisplay = ({ valueAwayFrom, discriptor, isInDanger }) => {
	return (
		<div className={isInDanger ? "countdown danger" : "countdown"}>
			<p>{valueAwayFrom}</p>
			<span>{discriptor}</span>
		</div>
	);
};

export default CountDownTimer;
