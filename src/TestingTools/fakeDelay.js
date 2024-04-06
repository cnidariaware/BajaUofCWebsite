
function fakeDelay(ms) {
  /* 
    useful for testing allows for a fake response, allow us to see what the program does while waiting for data from the backend
    REQUIRES:
        time in milliseconds
        
        needs a line like this to run
        await fakeDelay(5000);
    PROMISES:
        nothing
    Develop in part by: Brock
    Contact: darkicewolf50@gmial.com
    */
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export default fakeDelay;