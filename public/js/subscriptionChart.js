const socket = io();
const ctx = document.getElementById('subscriptionChart').getContext('2d');
const alertMessage = document.getElementById('m-alert');
var countSecond = 0

// alert connection
alertMessage.style.display = 'none';

/**
 * Define SubscriptionChart on label canvas with id subscriptionChart inside SubscriptionChart.ejs
 */
var SubscriptionChart = new Chart(ctx, {
  type: "line",
  parsing: false,
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        label: "New",
        borderColor: "rgba(100, 2, 0, 0.85)",
        fill: false,
      },
      {
        data: [],
        label: "Canceled",
        borderColor: "rgba(500, 100, 3, 0.85)",
        fill: false,
      },
      {
        data: [],
        label: "Acepted",
        borderColor: "rgba(8, 96, 110, 0.85)",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});


/**
 * socket on, update datasets from SubscriptionChart
 */
socket.on('subscriptions', (data) => {

  countSecond++
  SubscriptionChart.data.labels.push(countSecond); //update labels from SubscriptionChart

  //update datasets from SubscriptionChart 
  SubscriptionChart.data.datasets[0].data.push(data['new']['amount']);
  SubscriptionChart.data.datasets[1].data.push(data['canceled']['amount']);
  SubscriptionChart.data.datasets[2].data.push(data['acepted']['amount']);

  SubscriptionChart.update();
});


/**
 * handling alert connection
 */
setInterval(() => {
  if (!socket.connected) {
    alertMessage.style.display = 'block';
  } else {
    alertMessage.style.display = 'none';
  }
}, 2000);