/**
 * worker file, simulated behavior of subscriptions in a platform
 */


/**
 *
 * @param {*io} socket
 * is call from index.js
 * emit a object(counter) through chanel subscriptions
 */
function EmmitData(socket) {
  // difine counter object
  let counter = {
    acepted: {
      amount: 0.0,
      count: 0,
      date: "",
    },
    new: {
      amount: 0.0,
      count: 0,
      date: "",
    },
    canceled: {
      amount: 0.0,
      count: 0,
      date: "",
    },
  };

  return function () {
    // emit data each 1 second  
    setInterval(() => {
      const typeTransaction = ["acepted", "new", "canceled"];
      const number = Math.floor(Math.random() * 3);
      const amount = Math.random() * 1000;

      // sum all data on counter object
      counter[typeTransaction[number]]["count"]++;
      counter[typeTransaction[number]]["amount"] += amount;
      counter[typeTransaction[number]]["date"] = new Date();

      // subscriptions chanel
      socket.emit("subscriptions", counter);
    }, 1000);
  };
}

module.exports = { EmmitData };
