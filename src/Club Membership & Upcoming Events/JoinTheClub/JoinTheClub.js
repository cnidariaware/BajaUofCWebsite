import CountDownTimer from "../../CountDown/CountDownTimer.js";
import "./JoinTheClub.css";
import "./messageToDisplayAfter.css";

/**
 * @param {null} null - requires nothing
 * @returns {React.JSX.Element} page - returns the page content
 * @description Recuitment Page on our website
 * @author Brock <darkicewolf50@gmail.com>
 * @todo css
 */
const JoinTheClub = () => {
	const recuitmentDate = new Date(2024, 9, 17, 0, 0, 0, 0).getTime(); //september 17 2024

	return (
		<div id="JoinClub">
			{recuitmentDate && (
				<p>
					We Currently are not recuiting please check back when this timer is
					finished
				</p>
			)}
			<CountDownTimer
				dateFinished={recuitmentDate}
				messageDisplayAfter={messageToDisplayAfter()}
			/>
		</div>
	);
};

/**
 * @param {null} null - requires nothing
 * @returns {React.JSX.Element} page - component that is displayed after timer is finished
 * @description shows recuitment link
 * @author Brock <darkicewolf50@gmail.com>
 */
const messageToDisplayAfter = () => {
	return (
		<div id="message">
			<h3>Recuitment Form is OPEN!</h3>
			<p>Appy using the link below</p>
			<a
				href="https://form.jotform.com/232026633865053"
				target="_blank">
				<img
					src="https://www.jotform.com/uploads/darkicewolf50/form_files/232026633865053_1693175101_qrcode_muse.png"
					width="100%"
					alt="QR Code for Jotform form"
				/>
				<p>Apply Here!</p>
			</a>
		</div>
	);
};

export default JoinTheClub;
