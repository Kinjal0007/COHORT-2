/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

async function wait(n) {
    return new Promise((resolve) => {
      setTimeout(resolve, n * 1000);
    });
  }
  
  async function calculateTime(t1, t2, t3) {
    let before = new Date().getTime();
    return new Promise((resolve) => {
      Promise.all([wait(t1), wait(t2), wait(t3)]).then((values) => {
        let after = new Date().getTime();
        resolve(after - before);
      });
    });
  }

module.exports = calculateTime;
