import { useEffect, useState } from "react";
import "./CountDownTimer.css";

/**
 * @param {Date} dateFinished - Date object with time that it finishes Date(year, monthNumber, day, hour, minute, second)
 * @param {React.JSX.Element} messageDisplayAfter - Message to display afterwards,
 * @returns {React.JSX.Element} page - returns the page content
 * @description A fun countdown timer of how many days, minutesz and seconds until x happens
 * @author Brock <darkicewolf50@gmail.com>
 * @todo change messageDisplayAfter to take in another page
 */
const CountDownTimer = ({ dateFinished, messageDisplayAfter }) => {
	const [days, hours, minutes, seconds] = useCountdown(dateFinished);
	if (days + hours + minutes + seconds <= 0) {
		return (
			<div id="afterTime">
				<ShowCounter
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
				{messageDisplayAfter}
			</div>
		);
	} else {
		return (
			<div>
				<ShowCounter
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
			</div>
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
	let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
	if (days < 0) {
		days = 0;
	}
	if (hours < 0) {
		hours = 0;
	}
	if (minutes < 0) {
		minutes = 0;
	}
	if (seconds < 0) {
		seconds = 0;
	}
	return [days, hours, minutes, seconds];
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div id="counter">
			<DateTimeDisplay
				valueAwayFrom={days}
				discriptor={"Days"}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={hours}
				discriptor={"Hours"}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={minutes}
				discriptor={"Mins"}
			/>
			<p>:</p>
			<DateTimeDisplay
				valueAwayFrom={seconds}
				discriptor={"Seconds"}
			/>
		</div>
	);
};

const DateTimeDisplay = ({ valueAwayFrom, discriptor }) => {
	return (
		<div>
			<p>{valueAwayFrom}</p>
			<span>{discriptor}</span>
		</div>
	);
};

export default CountDownTimer;
