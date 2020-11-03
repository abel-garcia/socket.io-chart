# socket.io
A basic example of sockets with:

* [socket.io](https://socket.io/)
* [chartjs](https://socket.io/)
* [node.js (express)](https://expressjs.com/)

## sockets
The TCP sockets enable real-time, bi-directional communication between web clients and servers. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.

![alt text](https://socket.io/images/bidirectional-communication.png)


## struct project

```bash
.
├── index.js
├── public
│   └── js
│       └── subscriptionChart.js
├── router
│   └── v1.router.js
├── views
│   ├── index.ejs
│   ├── navbar.ejs
│   └── subscriptionChart.ejs
└── worker.js
```

## Usage

Run the project with docker (docker-compose) by default run in port 3000

```bash
docker-compose up -d
```
