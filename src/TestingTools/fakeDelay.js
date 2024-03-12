/**
 * @param {int} ms - time in ms to add a delay
 * @returns {Promise(resolve)} Promise - reutrns an empty promise after the set time
 * @description Testing tool to delay a function deliberatly
 * @author Brock <darkicewolf50@gmail.com>
 * @example await fakeDelay(5000);
 */
function fakeDelay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default fakeDelay;
